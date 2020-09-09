const express = require('express')

const middleware = require('./middleware/findAndTranslate')
const findAndTranslate = require('./middleware/findAndTranslate')

const app = express()
const port = process.env.PORT || 3000


app.get('*', (req,res)=>{
    pokemonName = JSON.stringify(req.url).substring(2,req.url.length+1)

    const shakespeareDesc = {
    "name": pokemonName,
    "description": findAndTranslate(pokemonName)
    }



    res.send(shakespeareDesc)
})


app.listen(port, ()=>{
    console.log('Server running on port '+port)
})