
const sendResponse=(req,res,next)=>{

  const data=req.data  
  const status=req.status;

  res.status(status).send(data)


}

module.exports= sendResponse