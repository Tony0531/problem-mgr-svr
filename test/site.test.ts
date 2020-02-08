import app from '../src/app';
const request = require('supertest')(app.listen());

describe("site/test", () => {
    describe('sign up', function() {
        it('should sign in successful', function(done) {
            request
                .post('/signin')
                .send({
                    loginname: "user1",
                    password: "passwd1"
                })
                .end(function(err: any, res: any) {
                    //should.not.exist(err);
                    res.text.should.containEql('登录成功');
                    done();
                });
        });
    });
});
