const { Router } = require("express");

const controller = require("../controllers/userController.js");
const sendResponse = require("../middlewares/response.js");
const router = Router();


router.post("/signup", controller.signUp,sendResponse)
router.post("/signin", controller.signIn,sendResponse)


module.exports = router;

