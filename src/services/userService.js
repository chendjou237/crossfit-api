const Users = require('../database/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {v4:uuid} = require("uuid")

require('dotenv').config();


const getAllUsers = (filter) => {
    try {
        const users = Users.getAllUsers(filter);
        return users;
    } catch (error) {
        throw error;
    }
    };


const getOneUser = (userId) => {
    try {
        const user = Users.getOneUser(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

const registerUser = ({name, password}) => {
    
    try {
    const hashpassword = bcrypt.hashSync(password, 10);
        const id = uuid();
        const newUser = Users.createUser({id,name,password:hashpassword});
        
        return newUser;
    } catch (error) {
        throw error;
    }
}

const loginUser =  ({name, password}) => {
try {
    const  user = Users.getOneUser(name);
    const passwordMatch =  bcrypt.compareSync(password,user.password  )
    if(!passwordMatch){
        throw {
            status: 400,
            message: "Please enter the corresponding password",
        }
    }
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({userId: user.id}, secret, {
        expiresIn: '1h'
    })
    return token
    
} catch (error) {
    throw error;
}}

module.exports = {
    getAllUsers,
    getOneUser,
     registerUser,
     loginUser
};
