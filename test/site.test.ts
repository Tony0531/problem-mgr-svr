import { Service } from '../src/app'
import supertest, { Response } from 'supertest'
import mock from 'mock-fs'
import chai from 'chai'

const should = chai.should()

describe("site/test", function() {
  const app = new Service(".", undefined)
  const server = app.listen()
  const request = supertest(server)

  this.beforeAll(async function() {
    await app.startup()
  })

  beforeEach(function() {
    mock({
      'users/user1.json': '{"passwd":"passwd1"}',
    })
  })

  afterEach(function() {
    mock.restore()
  })

  this.afterAll(function() {
    server.close()
  })

  describe('sign in', function() {
    it('should sign in successful', (done) => {
      request
        .post('/signin')
        .send({
          loginname: "user1",
          password: "passwd1"
        })
        .expect(200)
        .end(function(err: any, res: Response) {
          should.not.exist(err)
          should.exist(res)
          //res.text.should.contains('登录成功')
          done()
        })
    })
    it('should sign in error with not exist user', (done) => {
      request
        .post('/signin')
        .send({
          loginname: "user_not_exist",
          password: "passwd1"
        })
        .expect(500)
        .end(function(err: any, res: Response) {
          should.not.exist(err)
          should.exist(res)
          should.exist(res.body.error)
          done()
        })
    })
    it('should sign in error for password mismatch', (done) => {
      request
        .post('/signin')
        .send({
          loginname: "user1",
          password: "passwd-error"
        })
        .expect(500)
        .end(function(err: any, res: Response) {
          should.not.exist(err)
          should.exist(res)
          should.exist(res.body.error)
          done()
        })
    })
  })
})
