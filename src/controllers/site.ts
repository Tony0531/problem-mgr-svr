/*
 * 用户注册逻辑
 */
export function signup(ctx: any) {
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

export function signin(ctx: any) {
    console.log("xxxxx signin");
    var loginname = ctx.body.loginname;
    var password = ctx.body.password;
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
