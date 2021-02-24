const express = require('express');
const path = require('path');
const app = express();

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

app.get('/ejs', function (req, res) {
  res.render('ejsTest');
})

app.get('/designTest', function(req, res){
    res.render("designSample");
})

app.post('/userData', function(req, res){
    console.log("사용자의 요청이 발생했습니다");
    console.log(req.body);
    res.send(true);
})

app.get('/user', function (req, res) {
    connection.query('SELECT * FROM user;', function (error, results, fields) {
        console.log(results);
        res.send(results);
    });
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
