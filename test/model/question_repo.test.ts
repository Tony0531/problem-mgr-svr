import { QuestionRepo } from '../../src/models'
import mock from 'mock-fs'
import chai from 'chai'

const should = chai.should()

describe("model/question_repo", function() {
  let repo: QuestionRepo

  this.beforeAll(function() {
    repo = new QuestionRepo(undefined);
    (async function() {
      await repo.scan()
    })()
  })

  it("exam should exist", function(done) {
    done()
  })
})
