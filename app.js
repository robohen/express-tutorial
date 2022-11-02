const express = require('express')
const app = express()

const people = require('./routes/people')

//static assets
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', authorize)

app.listen(8080, ()=> {
    console.log('Server is listening to port 8080')
})