const {getDescription} = require('../src/getDescription')

it("Should return pokemon description",()=>{
    let desc = getDescription("Bulbasaur", (err, description)=>{
        if(err){
            return err
        }
        else{
            return description
        }
    })

    if(desc != "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."){
        throw new Error('Expected "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.", but got '+desc)
    }
})