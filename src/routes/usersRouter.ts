var multer = require('multer')
var express = require('express')
var router = express.Router();
var userController = require('../controllers/usersController')
var { requireAuth } = require('../middleware/authmiddleware')

var upload = multer({ dest: './public/img/userAvatars' })

router.get('/edit', requireAuth, userController.userEdit_get)

router.post('/edit/avatar', requireAuth, upload.single('avatar'), userController.userEditAvatar_post)

router.post('/edit', requireAuth, userController.userEdit_post)

router.delete('/delete', requireAuth, userController.userDelete)

router.get('/profile/:username', userController.userPage_get)

router.get('/', userController.displayUsers_get)

module.exports = router