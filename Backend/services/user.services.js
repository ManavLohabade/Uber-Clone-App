const userModel = require('../models/user.models');



module.exports.createUser = async ({
    fullname,
    email,
    password
})  => {
    if (!firstname || !email || !password) {   
        throw new Error ('All fields are required');
    }
    const user = userModels.create({
        fullname: { 
            firstname,
            lastname
        },
        email,
        password
    });
}