import { User } from '../models';

/*
 * 新建和保存一个用户
 * @param {String} loginname: 登录名
 * @param {String} password: 密码
 * @param {Function} callback: 操作之后的回调函数 
 */
export var newAndSave = function(loginname: string, password: string, callback: any) {
    var user = new User();
    user.loginname = loginname;
    user.password = password;
    user.save(callback);
}

/*
 * 根据登录名查询用户
 * @param {String} loginname: 登录名
 * @param {Function} callback: 操作之后的回调函数 
 */
export var getUserByLoginName = function(loginname: string, callback: any) {
    User.findOne({ 'loginname': loginname }, callback);
}
