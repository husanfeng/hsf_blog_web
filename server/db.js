const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/husanfeng');

//为该次链接绑定事件
const db = mongoose.connection;
db.on('error', () => console.log('Mongo connection error'));
db.on('connected', () => console.log('Mongo connection success'));

//定义模板
const accountSchema = mongoose.Schema({
    account: String,
    password: String,
    pic: String
});

const contentSchema = mongoose.Schema({
    account: String,
    title: String,
    summary: String,
    detail: String,
    cat: String,
    image: String,
    time: Date
});

const catSchema = mongoose.Schema({
    account: String,
    catname: String
});

const commentSchema = mongoose.Schema({
    articleId: String,
    name: String,
    email: String,
    time: Date,
    content: String,
    status: String
})

/************** 定义模型Model **************/
const Models = {
    Account: mongoose.model('Account', accountSchema),
    Content: mongoose.model('Content', contentSchema),
    Cat: mongoose.model('Cat', catSchema),
    Comment: mongoose.model('Comment', commentSchema)
};

module.exports = Models;