const express = require('express');
const path = require('path');

const app = express()

//all static resources in the folder public will be accessible express handles exporting each of the file types, middleware, usually public or static folder names
app.use(express.static('./public'))

//app.get('/', (req, res) =>{
//    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// the index.html can be moved into the public folder so it can take up less space in the document
// because it is static
//})

app.all('*', (req, res)=>{
    res.status(404).send('page not found')
})

app.listen(8080, ()=>{
    console.log('server is listening on port 8080....')
})