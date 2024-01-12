const { Router } = require("express")

const {createEvent} =require("../controllers/eventController");
const sendResponse = require("../middlewares/response");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const router = Router();


router.post("/create",upload.,createEvent,sendResponse)



module.exports = router;