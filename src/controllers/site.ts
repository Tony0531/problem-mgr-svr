import { Context } from 'koa'
import { UserMgr } from '../models'
import { ServerError, ServerErrorCode } from './error'
/*
 * 用户注册逻辑
 */
export async function signup(ctx: Context) {
  // let loginname = req.body.loginname
  // let password = req.body.password
  // let ep = new eventproxy()
  // ep.fail(next)

  // ep.on('signup-err', function(status: any, errMessage: any) {
  //     let data = {
  //         errCode: status,
  //         errMessage: errMessage
  //     }
  //     res.json(data)
  // })

  // if ([loginname, password].some(function(item) { return item == '' })) {
  //     return ep.emit('signup-err', 422, '用户名或密码不能为空')
  // }

  // UserProxy.getUserByLoginName(loginname, function(err: any, user: any) {
  //     if (user) {
  //         return ep.emit('signup-err', 422, '用户已经存在')
  //     }
  //     UserProxy.newAndSave(loginname, password, function(err: any, user: any) {
  //         if (err) {
  //             return next(err)
  //         }
  //         let data = {
  //             errCode: 200,
  //             errMessage: '注册成功'
  //         }
  //         req.session.user = user
  //         res.json(data)
  //     })
  // })
}

export async function signin(ctx: Context) {
  const userMgr: UserMgr = ctx.userMgr

  const loginname = ctx.request.body.loginname
  const password = ctx.request.body.password

  const user = await userMgr.findUser(loginname)
  if (!user) {
    throw new ServerError(ServerErrorCode.UserNotExists)
  }

  if (!user?.validatePasswd(password)) {
    throw new ServerError(ServerErrorCode.UserAuthFailed)
  }

  ctx.response.body = {}
}
