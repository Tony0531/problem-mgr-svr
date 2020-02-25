import { Exam } from './exam'

export class ExamParser {
  constructor(readonly exam: Exam) {
  }

  parse(content: string) {
    const lines = content.split(/\r?\n/)

    for (const line of lines) {
      this._processLine(line)
    }
  }

  private _processLine(line: string) {

    const setupLine = line.match(/^\s*#\+(TITLE|TAG|STARTUP|SEQ_TODO|TODO|TAGS|CATEGORY|LATEX_CLASS|LATEX_HEADER|LATEX_CLASS_OPTIONS):(.*)$/i)
    if (setupLine) {
      this._processSetupLine(setupLine[1].toUpperCase(), setupLine[2])
      return
    }

    const directiveLine = line.match(/^(\s*)#\+(?:(begin|end)_)?(.*)$/i) // m[1] => indentation, m[2] => type, m[3] => content
    if (directiveLine) {
      //this._processDirectiveLine(directiveLine[1], directiveLine[2], directiveLine[3])
      return
    }

  }

  private _processSetupLine(tag: string, content: string) {
    if (tag == "TITLE") {
      this.exam.title = content.trim()
    }
    else if (tag == "CATEGORY") {
      this.exam.subject = content.trim()
    }
    else if (tag == "LATEX_HEADER") {
      this.exam.latexHeaders.push(content.trim())
    }
    else if (tag == "LATEX_CLASS") {
      this.exam.latexClass = content.trim()
    }
  }
}
