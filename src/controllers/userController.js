const service = require('../services/userService');

const getAllUsers = (req, res) => {
    try {
        const users = service.getAllUsers(req.query);
        res.send({
            status: "ok",
            data: users
        });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
}

const getOneUser = (req, res) => {
    const {
        params: {
            userId
        }
    } = req;
    if (!userId) {
        res.status(400).send({
            status: "error",
            data: {
                error: "userId is missing in request params"
            }
        });
    }
    try {
        const user = service.getOneUser(userId);
        res.status(201).send({
            status: "OK",
            data: user
        });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
}

const registerUser = (req, res) => {
    const {
        name, password
    } = req.body;
    if (!name || !password) {
        res.status(400).send({
            status: "error",
            data: {
                error: "missing a required field in request body: 'name', 'password'"
            }
        });
    }
    try {
        const user = service.registerUser({name, password});
        res.status(201).send({
            status: "OK",
            data: user
        });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }
}

const loginUser = (req, res) => {
    const {name, password} = req.body;
    if (!name || !password) {
        res.status(400).send({
            status: "error",
            data: {
                error: "missing a required field in request body: 'name', 'password'"
            }
        });
    }
    try {
        const token = service.loginUser({name, password});
        res.status(201).send({
            status: "OK",
            data: token
        });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: {
                error: error?.message || error
            }
        });
    }

}

module.exports = {
    getAllUsers,
    getOneUser,
    registerUser,
    loginUser
}