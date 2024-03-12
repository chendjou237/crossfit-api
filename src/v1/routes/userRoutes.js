const express = require('express')
const router = express.Router()
const {getAllUsers, getOneUser, registerUser, loginUser} = require('../../controllers/userController')
const verifyToken = require('../../middleware/authMiddleware')

router.get('/',verifyToken, getAllUsers)
router.get('/:userId', verifyToken, getOneUser)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router