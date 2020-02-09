import Koa from 'koa';
import Router from 'koa-router';
import * as site from './controllers/site';
import bodyParser from 'koa-bodyparser';
import { UserMgr } from './models';

//work-round force load encodings
import iconv from 'iconv-lite';
iconv.encodingExists("utf8");

const app = new Koa();

app.context.userMgr = new UserMgr("demo");

app.use(bodyParser());

const router = new Router();
router.post('/signup', site.signup);  // 用户注册
router.post('/signin', site.signin);  // 用户登录

app.use(router.routes());

export default app;
