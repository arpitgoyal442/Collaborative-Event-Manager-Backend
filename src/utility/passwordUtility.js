
const brcypt = require("bcrypt")

const saltRounds = 10;

const encryptPassword = (password) => {


    return new Promise((resolve, reject) => {


        brcypt.hash(password, saltRounds, (err, hashPassword) => {

            if (err) {
                reject(err)
            }
            else resolve(hashPassword)
        })


    })

}


const comparePassword = (givenPassword, hashPassword) => {


    return new Promise((resolve, reject) => {

        brcypt.compare(givenPassword, hashPassword, (err, result) => {

            if (err) {
                reject(err);
            }
            else {
                resolve(result)
            }


        });


    })
}


module.exports = {
    encryptPassword,
    comparePassword
}