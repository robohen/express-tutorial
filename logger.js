const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
app.use('/api', logger)

//api/home/products
const logger = (req,res,next)=> {

    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    //either use send and terminate or use next to pass onto next middleware
    next()
}

app.get('/',logger, (req,res)=>{
    
})

app.get('/api/products',logger, (req,res)=>{
    res.send('Products')
})
app.get('/',logger, (req,res)=>{
    
})

app.get('/api/items',logger, (req,res)=>{
    res.send('Items')
})

app.listen(8080, ()=> {
    console.log('Server is listening to port 8080')
})
module.exports= logger