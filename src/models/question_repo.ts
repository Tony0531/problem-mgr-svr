import fs from 'fs'
import { promisify } from 'util'
import { Exam } from './exam'
import { Question } from './question'

export class QuestionRepo {
  readonly repo: string

  private _subjects: string[] = []
  get subjects() {
    return this._subjects
  }

  private _exams = new Map<string, Exam>()
  get exams(): Exam[] {
    return [...this._exams.values()]
  }

  private _questions = new Map<string, Question>()
  get questions(): Question[] {
    return [...this._questions.values()]
  }

  constructor(root: string | undefined) {
    this.repo = root ? `${root}/exams` : "exams"
  }

  async scan() {
    const readdir = promisify(fs.readdir)

    const dirs = await readdir(this.repo).catch(reason => { })
    for (const d of dirs || []) {
      console.log(d)
    }
  }
}
