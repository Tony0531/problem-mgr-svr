import { QuestionRepo } from '../../src/models'
import mock from 'mock-fs'
import chai from 'chai'

const should = chai.should()

describe("model/question_repo", function() {
  let repo: QuestionRepo

  this.beforeAll(function() {
    mock({
      'exams': {
        'grandle1': {
          'category1': {
            'test1.org':
              `
`,
            'test2.org': '',
          },
          'category2': {
            'test3.org': '',
          },
        },
        'grandle2': {
          'category1': {
            'test4.org': '',
          },
        }
      },
    })

    repo = new QuestionRepo(undefined);
    (async function() {
      await repo.scan()
    })()
  })

  it("exams should exist", function(done) {
    repo.exams.map(exam => exam.title || '-').should.deep.equals(['test1', 'test2', 'test3', 'test4'])
    done()
  })
})
