const mongoose = require('mongoose');
const brcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },

        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
},
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 6 characters long'],

    },
    password: {
        type: String,
        required: true,  
        select: false,
    },
    
    socketID: { 
        type: String,
    },
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await brcypt.compare(Password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await brcypt.hash(password, 10);
}

const User = mongoose.model('User', userSchema);

module.exports = userModel;