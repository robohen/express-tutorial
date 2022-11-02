const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')


// req => middleware => res
//they get executed in the order they are listed in
//merely an example
app.use(morgan(tiny))
app.use([logger, authorize])

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

    app.get('/api/items',[logger], (req,res)=>{
    res.send('Items')
})