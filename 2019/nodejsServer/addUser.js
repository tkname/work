//express_demo.js 文件
let express = require('express');
let app = express();
let t = 8081;


/** 
 * 数据库连接
*/

let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : '47.98.211.43',
  user     : 'root',
  password : 'lib1234',
  database : 'test'
});

//使post请求 req.body 有效
let bodyParser=require('body-parser');
/// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false })); 


function sql(e){
  connection.query(e, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
}

connection.connect();





/**
 * @get 请求 可用 req.query 获取数据
 * 
 * @post 需要设置
 *  let bodyParser=require('body-parser');
    //需要设置
    app.use(bodyParser.urlencoded({ extended: false })); 
    req.body 接受数据
 * 
 *  */ 

app.post('/addUser', function (req, res) {

  // 输出 JSON 格式
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
  
  //接收前台POST过来的请求内容
  let reqData = req.body;
  console.log(reqData);

  let name=reqData.name;
  let sex=reqData.sex?reqData.sex:0;

  let  addSql = 'INSERT INTO test_user(name,sex) VALUES (?,1)';
  let  addSqlParams = ['菜鸟工具'];

  console.log(connection)

  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        

   console.log('--------------------------INSERT----------------------------');
   //console.log('INSERT ID:',result.insertId);        
   console.log('INSERT ID:',result);        
   console.log('-----------------------------------------------------------------\n\n');  
});

// connection.end();


  let response ={
    msg:"返回成功",
    data:[reqData]
  }
  res.end(JSON.stringify(response));

})


 
let server = app.listen(t, function () {
 
  let host = server.address().address;
  let port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})