const express = require('express')
const router = express.Router()
// const db = require('../database/db')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


process.env.SECRET_KEY = 'secret'

const userController = require('../Controllers/userController')

router.get('/',userController.index)
router.get('/me',userController.auth)
router.post('/show',userController.showUser)
router.post('/store',userController.addUser)
router.post('/update',userController.updateUser)
router.post('/delete',userController.deleteUser)


module.exports = router