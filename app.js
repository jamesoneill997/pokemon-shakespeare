const express = require('express')
const getDescription = require('./src/getDescription')
const getTranslation = require('./src/getTranslation')


const app = express()
const port = process.env.PORT || 3000


app.get('*', (req,res)=>{
    pokemonName = JSON.stringify(req.url).substring(2,req.url.length+1)

    const desc = getDescription(pokemonName, (error, response)=>{
             if(error){
                res.send(error, 'Error fetching pokemon description.')
             }
             else{
                getTranslation(response, (err, resp)=>{
                    if(error){
                        res.send(err, 'Error fetching pokemon description.')
                     }
                     else{
                            res.send(resp)
                        }
                })
             }   
        })

    
    
    //res.send("Pokemon Name: " + JSON.stringify(req.url))
})


app.listen(port, ()=>{
    console.log('Server running on port '+port)
})