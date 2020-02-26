export class Exam {
  grade: string | undefined
  subject: string | undefined
  title: string | undefined
  latexClass: string | undefined
  latexHeaders: string[]

  constructor() {
    this.latexHeaders = []
  }
}

