const { json } = require("body-parser");



const createEvent=async(req,res,next)=>{
    try{

       console.log( JSON.parse(req.body.jData))
       console.log(req.body.jData)
       console.log(req.files)
       next();
       
    }catch(e){
       
        next();
    }
}

module.exports ={

    createEvent
}