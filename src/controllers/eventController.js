


const createEvent=async(req,res,next)=>{
    try{

       console.log(req.body)
       next();
       
    }catch(e){
       
        next();
    }
}

module.exports ={

    createEvent
}