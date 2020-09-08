const request = require('postman-request')

//getDescription takes a pokemon name as a parameter and returns an English description
const getDescription = (pokeName, callback)=>{
    //create API query
    const url = 'https://pokeapi.co/api/v2/pokemon-species/' + pokeName
    
    //send request to pokeapi
    request({url, json:true}, (error, {body})=>{
        const {err} = body
        //error handling
        if(error){
            callback('Error connecting with weather service.', undefined)
        }
        else if(err){
            callback(err.info, undefined)
        }

        //send back description (english version)
        else{
            callback(undefined, body['flavor_text_entries'][0]['flavor_text'])
        }
    })

}

module.exports = getDescription