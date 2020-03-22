import { Context } from 'koa'
import { QuestionRepo } from '../models'
import { ServerError, ServerErrorCode } from './error'

export async function exams(ctx: Context) {
  const repo: QuestionRepo = ctx.questionRepo

  ctx.response.body = repo.exams
}
