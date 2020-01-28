var config = require('./config.ts')
import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import router from './router'

var connection_string = config.dbprefix + config.dbhost + '/' + config.dbname;

// 数据库连接
mongoose.connect(connection_string, function(err: any) {
    if (err) {
        console.log('connect to %s error', connection_string, err.message);
    }
});

const app = express()

var MongoStore = require('connect-mongo')(session)
app.use(
    session({
        secret: config.session_secret,
        store: new MongoStore({
            url: connection_string
        }),
        resave: true,
        saveUninitialized: true,
    })
)

app.use('/', router);

app.listen(config.port, () => console.log('Example app listening on port 3000!'))
