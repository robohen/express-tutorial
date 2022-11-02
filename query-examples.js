const express = require('express')
const app = express();
const { products } = require('./data')

app.get('/', (req, res) =>{
    res.send('<h1> Home page</h1> <a href="/api/products">products</a>')
})
app.get('/api/products/:productID', (req,res) =>{
   //this displays a single product but is a bit overkill because it can be optimized since there are only 4 products
//    console.log(req)
//    console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    app.get('/api/products/:productID/reviews/:reviewID', (req, res)=> {
        console.log(req.params)
        res.send('hello World')
    })

    app.get('/api/v1/query', (req,res =>{
        //console.log(req.query)
        //using let because the value will be modified
        const {search, limit} = req.query
        let sortedProducts = [...products];

        if(search){
            sortedProducts = sortedProducts.filter((product)=>{
                return product.name.startsWith(search)
            })
        }
        if(limit){
            sortedProducts = sortedProducts.slice(0,Number(limit))
        }
        if(sortedProducts.length < 1){
            //res.status(200).send('no products matched your search results')
            return res.status(200).json({ sucess: true, data: []})
        }
        return res.status(200).json(sortedProducts)
    }))})
        
    
    // const newProducts = products.map((product) =>{ uses map method to retrieve information without altering the original
    //    const {id,name,image} = product
    //    return {id, name, image}
    // })
    // res.json(newProducts)
// })
