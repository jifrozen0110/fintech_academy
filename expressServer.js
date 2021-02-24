const express = require('express');
const path = require('path');
const app = express();
const request = require('request');


app.use(express.json());
//json 타입에 데이터 전송을 허용한다
app.use(express.urlencoded({ extended: false }));
//form 타입에 데이터 전송을 허용한다
app.use(express.static(path.join(__dirname, 'public')));//to use static asset

app.set('views', __dirname + '/views');
//뷰파일이 있는 디렉토리를 설정합니다
app.set('view engine', 'ejs');
//뷰엔진으로 ejs 사용한다 

// connection.end();
app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/signup', function(req, res){
    res.render('signup');
})

app.get('/authResult', function(req, res){
    var authCode = req.query.code;
    var option = {
        method : "POST",
        url : "https://testapi.openbanking.or.kr/oauth/2.0/token",
        header : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        form : {
            code : authCode,
            client_id : "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF",
            client_secret : "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy",
            redirect_uri : "http://localhost:3000/authResult",
            grant_type : "authorization_code"
        }
    }
    request(option, function(err, response, body){
        if(err){
            console.error(err);
            throw err;
        }
        else {
            var accessRequestResult = JSON.parse(body);
            console.log(accessRequestResult);
            res.send(accessRequestResult)
        }
    })

})


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1q2w3e4r',
  database : 'fintech210222',
});

connection.connect();


app.listen(3000)
