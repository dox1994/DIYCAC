/**
 * Created by zihanwang on 8/21/16.
 */
var express = require('express');
var fs = require("fs");
var bodyParser=require('body-parser');
var nodemailer=require('nodemailer');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var myEmailHelper=require('./prepare_questionnaire_result.js');

var app = express();
app.use(express.static(__dirname + '/dist' ));

app.get('/get_past_examples', function(req, res)
{
    var responseObj = readJsonFileSync(__dirname + "/files/past_samples.json");
    res.end(JSON.stringify(responseObj));
});


var user = '750789874@qq.com'
    , pass = 'vgyvqfrhyhvhbfcc';
var transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465,
    secureConnection: true, // 使用 SSL
    auth: {
        user: user,
        pass: pass
    }
});
var mbti_result=readJsonFileSync(__dirname + "/files/mbti_result.json");
app.post('/questionnaire', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
   var htmlStr=myEmailHelper.getEmailHtml(req.body,mbti_result);
    transporter.sendMail({
        from    : 'MBTI<' + user + '>'
        , to      : 'jing.zhang@diycac.org'
        , subject : '【MBTI测试结果】'+req.body.name+' - '+req.body.school
        , html    : htmlStr
    }, function(err, res) {
        console.log(err, res);
        res.send('很抱歉！服务器出错了，请您联系中美加顾问！请将以下所有信息复制提供给中美加顾问，谢谢！<br/><br/>'+err);
    });
    res.sendFile(__dirname + '/app/questionnaire_result.html');
});



function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

var server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});
