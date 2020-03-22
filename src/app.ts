import Koa from 'koa'
import Router from 'koa-router'
import koaCors from 'koa-cors';
import bodyParser from 'koa-bodyparser'
import * as site from './controllers/site'
import * as repo from './controllers/repo'
import { ServerError, ServerErrorCode } from './controllers/error'
import { UserMgr } from './models'
import { QuestionRepo } from './models'

//work-round force load encodings
import iconv from 'iconv-lite'
iconv.encodingExists("utf8")

export class Service extends Koa {
  constructor(root: string | undefined, readonly logger: any | undefined) {
    super()
    this.context.userMgr = new UserMgr(root)
    this.context.questionRepo = new QuestionRepo(root)

    this.use(koaCors())
    this.use(bodyParser())
    this.use(this.processError())
    this.on("error", (err, ctx) => {
      if (logger) {
        logger.log(err, ctx)
      }
    })

    const router = new Router()
    router.post('/signup', site.signup)  // 用户注册
    router.post('/signin', site.signin)  // 用户登录
    router.get('/exams', repo.exams)  // 用户登录

    this.use(router.routes())
  }

  async startup() {
    await this.context.questionRepo.scan()
  }

  processError(): ((ctx: any, next: any) => void) {
    return async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        ctx.status = err.status || 500
        if (err instanceof ServerError) {
          ctx.response.body = {
            error: ServerErrorCode[(<ServerError>err).code],
            message: err.message,
          }
        }
        else {
          ctx.body = {
            message: err.message,
          }
        }
        ctx.app.emit("error", err, ctx)
      }
    }
  }
}
