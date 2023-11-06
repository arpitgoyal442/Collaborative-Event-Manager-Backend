
const db = require("../db/index.js")

const passwordUtility = require("../utility/passwordUtility.js")
const validInputUtility = require("../utility/validInputUtility.js")
const config = require("../configs/config.js")
const commonQueries = require("../utility/queryUtility.js")

const signUp = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        const emailOk = validInputUtility.isEmailValid(email);

        if (!emailOk)
        {
            req.status=400;
            req.data="Invalid Email";
            next();
        }
           

        const passwordStrong = validInputUtility.isPasswordStrong(password);

        if (!passwordStrong)
          {
            req.status(400);
            req.data="Password is Not String";
            next();
          }

          console.log("Before")
        // Now Check if email already Exists
        await db.query("Select email from users where email = $1", [email]).then((data) => {

            // console.log(data);
            if (data.rowCount != 0)
               {
                req.status=400;
                req.data="Email Already Exists";
                next();
               }


        }).catch((e) => {

            req.status=500;
            req.data=e
            next();
        })

        console.log("After")

        // Encrypt Password
        let hashedPassword;
        await passwordUtility.encryptPassword(password).then((data) => {
            // console.log(data)
            hashedPassword = data;
        }).catch((e) => {
            req.status=500;
            req.data=e
            next();

        })

        let insertDate = { email: email, password_hash: hashedPassword }
        let insertionQuery = commonQueries.insert('users', insertDate);

        // Now Signup the user
        let result = await db.query(insertionQuery, Object.values(insertDate))
       

        req.status = 200;
        req.data = result;
        next();


    } catch (e) {

        req.status=500;
        req.data=e;
        next();

    }finally{
        db.end()
    }

}

const signIn = async (req, res,next) => {

    try {
        const { email, password } = req.body;

        let user = await db.query(`SELECT * from users where email=$1`, [email])
        user = user.rows[0];

        if (!user)
            return res.send("User Don't Exist");


        let compareResult = await passwordUtility.comparePassword(password, user.password_hash);

        if (compareResult)
           {
            req.status=200;
            req.data="Login Successfull";
            next();
           }

        else  {
            req.status=401;
            req.data="Incorrect Password";
            next();
        }


    } catch (e) {
        
        req.status(500);
        req.data=e;
        next();
    }

}

module.exports = {
    signIn,
    signUp
}