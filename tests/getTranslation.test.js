const {getTranslation} = require('../src/getTranslation')

it("Should translate English to Shakespearean English",()=>{
    let greeting = getTranslation("Hello,there. How are you today?", (err, translation)=>{
        if(err){
            return err
        }
        else{
            return translation
        }
    })

    if(greeting != "Valorous morrow to thee, sir, thither. How art thee the present day?"){
        throw new Error('Expected "Valorous morrow to thee, sir, thither. How art thee the present day?", but got '+greeting)
    }
})