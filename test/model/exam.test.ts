import chai from 'chai'
import { Exam } from '../../src/models'
import { ExamParser } from '../../src/models/exam_parser'

const should = chai.should()

describe("model/exam", function() {
  let exam: Exam

  this.beforeAll(function() {
    exam = new Exam

    const parser = new ExamParser(exam)
    parser.parse(
      `#+TITLE: 语文测试试卷一
#+STARTUP: overview
#+STARTUP: noptag
#+STARTUP: hideblocks
#+TAGS: no_answer(a)
#+CATEGORY: 语文
#+LATEX_CLASS: exam
#+LATEX_HEADER: \\usepackage{xeCJK}
#+LATEX_HEADER: \\usepackage{amsmath}
#+LATEX_HEADER: \\newcommand\\epart{\\part}
#+LATEX_HEADER: \\newcommand\\degree{^\\circ}
#+LATEX_HEADER: \\renewcommand{\\solutiontitle}{\\noindent\\textbf{解：}\\par\\noindent}
#+LATEX_HEADER: \\everymath{\\displaystyle}
#+LATEX_HEADER: \\usetkzobj{all}

#+LATEX_CLASS_OPTIONS: [answers]
`
    )
  })

  it('title should correct', function() {
    should.exist(exam.title)
    exam.title!.should.equal("语文测试试卷一")
  })

  it('subject should correct', function() {
    should.exist(exam.subject)
    exam.subject!.should.equal("语文")
  })

  it('latex class should correct', function() {
    should.exist(exam.latexClass)
    exam.latexClass!.should.equal("exam")
  })

  it('latex headers should correct', function() {
    exam.latexHeaders.should.deep.equals([
      "\\usepackage{xeCJK}",
      "\\usepackage{amsmath}",
      "\\newcommand\\epart{\\part}",
      "\\newcommand\\degree{^\\circ}",
      "\\renewcommand{\\solutiontitle}{\\noindent\\textbf{解：}\\par\\noindent}",
      "\\everymath{\\displaystyle}",
      "\\usetkzobj{all}",
    ])
  })

})
