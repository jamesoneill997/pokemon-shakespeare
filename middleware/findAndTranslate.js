const express = require('express')

//src functions
const getDescription = require('../src/getDescription')
const getTranslation = require('../src/getTranslation')

//findAndTranslate function to bring together the 2 src functions
const findAndTranslate = (pokeName)=>{
    //return Description passed through translation
    return getDescription(pokemonName, (error, response)=>{
        if(error){
            //if error, log and return error
            console.log(error)
            return error, 'Error fetching pokemon description.'
        }
        else{
            //translate
            return getTranslation(response, (err, resp)=>{
                if(error){
                    //if error, log and return error
                    console.log(error)
                    return err, 'Error fetching translation.'
                }
                
                else{
                    //the shakespearean description
                   return resp
                }
       })
    }   
})}


module.exports = findAndTranslate