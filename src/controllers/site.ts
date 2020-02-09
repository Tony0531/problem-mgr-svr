import { Context } from 'koa';
import { UserMgr } from '../models';

/*
 * 用户注册逻辑
 */
export async function signup(ctx: Context) {
    // var loginname = req.body.loginname;
    // var password = req.body.password;
    // var ep = new eventproxy();
    // ep.fail(next);

    // ep.on('signup-err', function(status: any, errMessage: any) {
    //     var data = {
    //         errCode: status,
    //         errMessage: errMessage
    //     }
    //     res.json(data);
    // });

    // if ([loginname, password].some(function(item) { return item == '' })) {
    //     return ep.emit('signup-err', 422, '用户名或密码不能为空');
    // }

    // UserProxy.getUserByLoginName(loginname, function(err: any, user: any) {
    //     if (user) {
    //         return ep.emit('signup-err', 422, '用户已经存在');
    //     }
    //     UserProxy.newAndSave(loginname, password, function(err: any, user: any) {
    //         if (err) {
    //             return next(err);
    //         }
    //         var data = {
    //             errCode: 200,
    //             errMessage: '注册成功'
    //         }
    //         req.session.user = user;
    //         res.json(data);
    //     });
    // });
}

export async function signin(ctx: Context) {
    const userMgr: UserMgr = ctx.userMgr;

    const loginname = ctx.request.body.loginname;
    const password = ctx.request.body.password;


    //States.isFile()
    // var ep = new eventproxy();
    // ep.fail(next);

    // ep.on('signin-err', function(status: any, errMessage: any) {
    //     var data = {
    //         errCode: status,
    //         errMessage: errMessage
    //     }
    //     res.json(data);
    // });

    // if ([loginname, password].some(function(item) { return item == '' })) {
    //     return ep.emit('signin-err', 422, '用户名或密码不能为空');
    // }

    // UserProxy.getUserByLoginName(loginname, function(err: any, user: any) {
    //     if (err) {
    //         return next(err);
    //     }
    //     if (!user) {
    //         return ep.emit('signin-err', 410, '用户不存在');
    //     }
    //     if (password !== user.password) {
    //         return ep.emit('signin-err', 403, '用户密码错误');
    //     }
    //     var data = {
    //         errCode: 200,
    //         errMessage: '登录成功'
    //     }
    //     req.session.user = user;
    //     res.json(data);
    // });
}
