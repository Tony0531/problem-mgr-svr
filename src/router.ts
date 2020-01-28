import express from 'express'
import * as site from './controllers/site'

var router = express.Router()

router.post('/signup', site.signup);	// 用户注册
router.post('/signin', site.signin);	// 用户登录

// router.post('/topic/create', topic.create);	// 发表话题

export default router
