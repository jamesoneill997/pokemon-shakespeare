const request = require('postman-request')

//getDescription takes a pokemon name as a parameter and returns an English description
const getTranslation = (desc, callback)=>{
    //format description into valid query
    desc = desc.split('\n').join(' ')
    desc = desc.split(' ').join('%20')

    //create API query
    const url = 'https://api.funtranslations.com/translate/shakespeare.json?text=' + desc
    
    //send request to shakespeare translator
    request({url, json:true}, (error, {body})=>{
        const {err} = body
        //error handling
        if(error){
            callback('Error connecting with service.', undefined)
        }
        else if(err){
            callback(err.info, undefined)
        }

        //send back description (shakespearean english version)
        else{
            callback(undefined, body)
        }
    })

}

module.exports = getTranslation