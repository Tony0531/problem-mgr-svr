import app from '../src/app';
import supertest, { Response } from 'supertest';
import mock from 'mock-fs';
import chai from 'chai';

const request = supertest(app.listen());
const should = chai.should();

describe("site/test", () => {
    beforeEach(function() {
        mock({
            './users/user1': '{"password":"passwd1"}',
        });
    });
    afterEach(function() {
        mock.restore();
    });

    describe('sign in', function() {
        it('should sign in successful', function(done) {
            request
                .post('/signin')
                .send({
                    loginname: "user1",
                    password: "passwd1"
                })
                .expect(200)
                .end(function(err: any, res: Response) {
                    should.not.exist(err);
                    should.exist(res);
                    res.text.should.contains('登录成功');
                    done();
                });
        });
    });
});
