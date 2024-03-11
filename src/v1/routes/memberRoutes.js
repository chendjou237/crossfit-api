const express = require('express')

const router = express.Router()

const {getOneMember} = require('../../controllers/memberController')

router.get('/:memberId', getOneMember)

module.exports = router