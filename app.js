const express = require('express')

const middleware = require('./middleware/findAndTranslate')
const findAndTranslate = require('./middleware/findAndTranslate')

const app = express()
const port = process.env.PORT || 3000


app.get('/pokemon/*', (req,res)=>{
    pokemonName = JSON.stringify(req.url).substring(10,req.url.length+1)

    const shakespeareDesc = {
    "name": pokemonName,
    "description": findAndTranslate(pokemonName, (err, description)=>{
        if(err){
            return err
        }
    
        else{
            return description
        }
    })
    }



    res.send(shakespeareDesc)
})


app.listen(port, ()=>{
    console.log('Server running on port '+port)
})