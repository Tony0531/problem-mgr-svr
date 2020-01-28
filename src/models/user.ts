import { Schema, model } from 'mongoose'

var userSchema = new Schema({
    loginname: { type: String },
    password: { type: String },
    create_at: { type: Date, default: Date.now }
});

userSchema.index({ loginname: 1 }, { unique: true });

export var User = model('User', userSchema);
