import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import { Exam } from './exam'
import { Question } from './question'
import { ExamParser } from './exam_parser'

const readdir = promisify(fs.readdir)

export class QuestionRepo {
  readonly repo: string
  private _exams = new Map<string, Exam>()
  private _subjects: string[] = []
  private _questions = new Map<string, Question>()

  constructor(root: string | undefined) {
    this.repo = root ? `${root}/exams` : "exams"
  }

  get subjects() {
    return this._subjects
  }

  get exams(): Exam[] {
    return [...this._exams.values()]
  }

  findExam(title: string): Exam | undefined {
    return this._exams.get(title)
  }

  get questions(): Question[] {
    return [...this._questions.values()]
  }

  addExam(exam: Exam) {
    if (!exam.title) {
      console.log("试卷名字为定义")
      return
    }

    if (this._exams.has(exam.title)) {
      console.log(`试卷《${exam.title}》重复`)
      return
    }

    this._exams.set(exam.title, exam)
  }

  async scan() {
    let examPromises: Promise<Exam | undefined>[] = []

    const grade_dirs = await readdir(this.repo)
      .catch(reason => {
        if (reason.code != 'ENOENT') {
          console.log(reason)
        }
      })
    for (const grade of grade_dirs || []) {
      const grade_path = path.join(this.repo, grade)
      const cagegory_dirs = await readdir(grade_path)
        .catch(reason => { console.log(reason) })

      for (const subject of cagegory_dirs || []) {
        const subject_path = path.join(grade_path, subject)

        const exam_files = await readdir(subject_path)
          .catch(reason => { console.log(reason) })

        for (const exam_file of exam_files || []) {
          const m = exam_file.match(/^(.*)\.org/i)
          if (!m) continue

          const title = m[1]
          examPromises.push(this.readExam(grade, subject, title, path.join(subject_path, exam_file)))
        }
      }
    }

    let exams = await Promise.all([...examPromises])
    for (let exam of exams) {
      if (exam) {
        this.addExam(exam)
      }
    }
  }

  readExam(grade: string, subject: string, exam_title: string, exam_file_path: string): Promise<Exam | undefined> {
    return new Promise((resolve, reject) => {
      let stream = fs.createReadStream(exam_file_path)
      const exam = new Exam
      const parser = new ExamParser(exam)

      stream.on("data", chunk => {
        parser.append(chunk)
      })

      stream.on("end", () => {
        if (!exam.title) exam.title = exam_title
        if (!exam.subject) exam.subject = subject
        if (!exam.grade) exam.grade = grade

        resolve(exam)
      })

      stream.on("error", error => {
        console.log(error)
        reject(error)
      })
    })
  }
}
