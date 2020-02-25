export class Exam {
  title: string | undefined
  subject: string | undefined
  latexClass: string | undefined
  latexHeaders: string[]

  constructor() {
    this.latexHeaders = []
  }
}

