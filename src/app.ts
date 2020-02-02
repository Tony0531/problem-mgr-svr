import Koa from 'koa';
import Router from 'koa-router';
import * as site from './controllers/site';

export const app = new Koa();

var router = new Router();
router.post('/signup', site.signup);	// 用户注册
router.post('/signin', site.signin);	// 用户登录

// app.use(
//     // session({
//     //     secret: config.session_secret,
//     //     // store: new MongoStore({
//     //     //     url: connection_string
//     //     // }),
//     //     resave: true,
//     //     saveUninitialized: true,
//     // })
// )

app.use(router.routes);
