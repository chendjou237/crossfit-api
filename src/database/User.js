const DB = require("./db.json")
const {saveToDatabase} = require("./utils")

const getAllUsers = (filter) => {
    let users = DB.users;
    try {
        if(filter.name){
        users = users.filter((user) => user.name.toLowerCase().includes(filter.name))
        }
    
        if(filter.page ){
        console.log(filter.page);
            const start = (filter.page - 1) * (filter.limit || 5);
            const end = filter.page * ( filter.limit|| 5);
            users = users.slice(start, end);
        }
        if(filter.sort){
            users = users.sort((a, b) => {
            if (filter.sort === "createdAt") {
                if(filter.sort[0] === "-"){
                return new Date(b.createdAt) - new Date(a.createdAt)
                }
                return new Date(a.createdAt) - new Date(b.createdAt)
            }
            if (filter.sort === "updatedAt") {
                if(filter.sort[0] === "-"){
                return b.updatedAt - a.updatedAt
                }
                return a.updatedAt - b.updatedAt  
            }
        })
        }
     
         return users
    } catch (error) {
     throw {
         status: error.status || 500,
         message: error.message || error
     }
    }
    }

const getOneUser = (userName) => {
    try {
        const user = DB.users.find((user) => user.name === userName);
        if(!user){
            throw {
                status: 404,
                message: `User with id ${userId} not found`
            }
        }
        return user;
    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || error
        }
    }
}

const createUser = (user) => {
    try {
        const newUser = {
            ...user,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        DB.users.push(newUser);
        saveToDatabase(DB);
        return newUser;
    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || error
        }
    }
}

const updateUser = (userId, body) => {
    try {
        const userIndex = DB.users.findIndex((user) => user.id === userId);
        if(userIndex === -1){
            throw {
                status: 404,
                message: `User with id ${userId} not found`
            }
        }
        const updatedUser = {
            ...DB.users[userIndex],
            ...body,
            updatedAt: new Date()
        }
        DB.users[userIndex] = updatedUser;
        saveToDatabase(DB);
        return updatedUser;
    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || error
        }
    }
}

const deleteUser = (userId) => {
    try {
        const userIndex = DB.users.findIndex((user) => user.id === userId);
        if(userIndex === -1){
            throw {
                status: 404,
                message: `User with id ${userId} not found`
            }
        }
        DB.users.splice(userIndex, 1);
        saveToDatabase(DB);
        return {message: "User deleted successfully"};
    } catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || error
        }
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
} 
