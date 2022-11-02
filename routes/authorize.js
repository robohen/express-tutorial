const express = require('express')
const router = express()

const people = require('./routes/people')
const auth = require('./routes/auth')


//this adds to the data
router.post('./login', (req,res) =>{
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

module.exports = router







