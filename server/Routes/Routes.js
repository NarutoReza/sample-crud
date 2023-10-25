const express = require('express')
const router = express.Router()

const { singupData, loginData, checkUser, viewAll, updateUser, deleteUser, viewOne } = require('../Controller/Control')

router.post('/signup', singupData)
router.post('/login', loginData)
router.post('/check', checkUser)
router.get('/all', viewAll)
router.patch('/update/:postId', updateUser)
router.delete('/delete/:postId', deleteUser)
router.get('/viewOne/:postId', viewOne)

module.exports = router