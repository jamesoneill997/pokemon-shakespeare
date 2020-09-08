const request = require('postman-request')

const getDescription = (pokeName, callback)=>{
    const url = 'https://pokeapi.co/api/v2/pokemon-species/' + pokeName
    
    request({url, json:true}, (error, {body})=>{
        const {err} = body
        if(error){
            callback('Error connecting with weather service.', undefined)
        }
        else if(err){
            callback(err.info, undefined)
        }
        else{
            callback(undefined, body)
        }
    })

}

module.exports = getDescription