const data = require("../localStorage/cred.json")
const process = require('process');
const {over} = require("../util/input.js");


const find = () => {

    if(process.argv[2] === undefined){
        console.log("One more parameter required,")
        console.log("Try passdom <Website name> instead.")
        return over()
    }

    if(Object.keys(data).includes(process.argv[2].toLowerCase())){
        console.log(`
========================================================================
                    Credentials for '${process.argv[2]}'

    Username -> ${data[process.argv[2].toLowerCase()].username}
    Password -> ${data[process.argv[2].toLowerCase()].password}
     
========================================================================
`)

        over()

    }
    else {
        console.error(`
    No Credentials Found for ${process.argv[2].toLowerCase()}
`)
over()

    }
} 
module.exports = find;