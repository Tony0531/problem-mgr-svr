import { Service } from '../src/app'
import supertest, { Response } from 'supertest'
import mock from 'mock-fs'
import chai from 'chai'

const should = chai.should()

describe("exam/test", function() {
  const app = new Service(".", undefined)
  const server = app.listen()
  const request = supertest(server)

  this.beforeAll(async function() {
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

    await app.startup()
  })

  this.afterAll(function() {
    mock.restore()
    server.close()
  })

  it('should success', (done) => {
    request
      .get('/exams')
      .expect(200)
      .end(function(err: any, res: Response) {
        should.not.exist(err)
        should.exist(res)
        console.log(res.body)
        //res.text.should.contains('登录成功')
        done()
      })
  })
})
