const { Router } = require("express")

const {createEvent} =require("../controllers/eventController");
const sendResponse = require("../middlewares/response");

const multer  = require('multer');
const { upload } = require("../utility/multer");





const router = Router();


router.post("/create",upload.fields([{name:'poster'},{name:'artists'}]),createEvent,sendResponse)



module.exports = router;