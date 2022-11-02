const express = require('express')();
const app = express()

app.get('/', (req,res) =>{
    console.log('user hit the resource')
    res.send('Home Page')
})

app.get('/about', (req,res) =>{
    console.log('user hit the resource')
    res.send('About Page')
})

// this allows for modification of pages that are not found
app.all ('*',(req, res)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(8080,()=>{
    console.log('port 8080 is listening')
})

//app.get
//app.post
//app.put
//app.delete
//app.use
//app.listen