const express = require('express')
const getDescription = require('./src/getDescription')

const desc = getDescription("bulbasaur", (error, response)=>{
    if(error){
        return console.log(error, 'Error fetching pokemon description.')
    }
    else{
        return console.log(response)
    }   
})

