const express = require('express')
const getDescription = require('./src/getDescription')


const app = express()
const port = process.env.PORT || 3000

//setup endpoints
app.get('/',(req, res) => {
    res.send('Please provide a pokemon name :)')    
})


app.get('*', (req,res)=>{
    
})







//-------------------Test Call------------------------------------
// const desc = getDescription("bulbasaur", (error, response)=>{
//     if(error){
//         return console.log(error, 'Error fetching pokemon description.')
//     }
//     else{
//         return console.log(response)
//     }   
// })

app.listen(port, ()=>{
    console.log('Server running on port '+port)
})