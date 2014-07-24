var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义chat对象模型
var UserSchema = new Schema({
    username: {
    	type: String,
    	unique: true
    },
    email: String,
    content: String,
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);

mongoose.connect('mongodb://127.0.0.1:27017/user');