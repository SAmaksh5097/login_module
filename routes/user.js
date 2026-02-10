const express = require('express')

const router = express.Router()

const {handleLogin, handleAddUser, handlePasswordEdit, handleDelete} = require('../controllers/user')
router.post('/',handleLogin) // login

router.post('/create',handleAddUser) // add user

router.patch('/',handlePasswordEdit) // edit password

router.delete('/',handleDelete) // delete user


router.get('/',(req,res)=>{
    res.send("This is homepage!!!")
})

module.exports = router