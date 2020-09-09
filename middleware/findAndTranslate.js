const express = require('express')

//src functions
const getDescription = require('../src/getDescription')
const getTranslation = require('../src/getTranslation')

//findAndTranslate function to bring together the 2 src functions
const findAndTranslate = (pokeName, callback)=>{
    //return Description passed through translation
    callback(undefined, getDescription(pokeName, (error, response)=>{
        if(error){
            //if error, log and return error
            console.log(error)
            callback(error, 'Error fetching pokemon description.')
        }
        else{
            //translate
            getTranslation(response, (err, resp)=>{
                if(err){
                    //if error, log and return error
                    console.log(err)
                    callback(err, 'Error fetching translation.')
                }
                
                else{
                    //the shakespearean description
                   callback(undefined, resp)
                }
       })
    }   
    })
)}



module.exports = findAndTranslate