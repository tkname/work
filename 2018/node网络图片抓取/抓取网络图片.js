//var http = require('https');
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
//设置循环
var i = 0;

//初始url 
// var url = "http://m.juyouqu.com/qu/3187982"; 
// function startSpider(x) {
//     console.log('向目标站点发送请求');
//     //采用http模块向服务器发起一次get请求      
//     http.get(x, function (res) {     
//         var html = '';        //用来存储请求网页的整个html内容
//         var titles = [];        
//         res.setEncoding('utf-8'); //防止中文乱码
//         //监听data事件，每次取一块数据
//         res.on('data', function (chunk) {   
//             html += chunk;
//             //console.log(chunk)
//         });
//         //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
//         res.on('end', function () {

//          var $ = cheerio.load(html); //采用cheerio模块解析html
//          //console.log('html',html)
//          var news_item = {
//             //获取文章的标题
//             title: $('.item-title').text().trim(),
//             imgSrc: $('.post-container img').attr('src'),
//             link: $(".button").attr('href'),//
//             //i是用来判断获取了多少篇文章
//             i: i = i + 1,     
//             };
//         console.log(news_item);
//         var news_title = $('.item-title').text().trim();
//         savedImg($,news_title);    //存储每篇文章的图片及图片标题
//         //下一篇文章的url
//         var nextLink="http://m.juyouqu.com" + $(".button").attr('href');
//         //这是亮点之一，通过控制I,可以控制爬取多少篇文章.

//         if (i <= 10) {                
//             setTimeout(function(){
//                 startSpider(nextLink);
//             },300)
//         }
//         });
//     }).on('error', function (err) {
//         console.log(err);
//     });

// }
// //该函数的作用：在本地存储所爬取到的图片资源
// function savedImg($,news_title) {
//     $('.post-container img').each(function (index, item) {
//         var img_title = news_title+index;
//         var img_filename = img_title + '.jpg';
//         var img_src = $(this).attr('src'); //获取图片的url
//         //采用request模块，向服务器发起一次请求，获取图片资源
//         request.head(img_src,function(err,res,body){
//             if(err){
//                 console.log(err);
//             }
//         });
//         request(img_src).pipe(fs.createWriteStream('./image/'+news_title + '---' + img_filename));     //通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。
//     })
// }

var url = "http://192.168.1.106:3002/?code=4798764654"; 

function startSpider(x) {
    console.log('向目标站点发送请求');
    //采用http模块向服务器发起一次get请求      
    http.get(x, function (res) {     
        var html = '';        //用来存储请求网页的整个html内容
        var titles = [];        
        res.setEncoding('utf-8'); //防止中文乱码
        
        //监听data事件，每次取一块数据
        res.on('data', function (chunk) {   
            html += chunk;
            //console.log(chunk)
        });
        //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
        res.on('end', function () {

         var $ = cheerio.load(html); //采用cheerio模块解析html
         console.log('html',html)

         var news_item = {
            //获取文章的标题
            code: $('.main .text').text().trim(),
            imgSrc: $('.canvas img').attr('src'),
            //i是用来判断获取了多少篇文章
            i: i = i + 1,     
            };

        console.log(news_item);

        var news_title = $('.item-title').text().trim();
        savedImg($,news_title);    //存储每篇文章的图片及图片标题


        //下一篇文章的url
        // var nextLink="http://m.juyouqu.com" + $(".button").attr('href');
        // //这是亮点之一，通过控制I,可以控制爬取多少篇文章.

        // if (i <= 10) {                
        //     setTimeout(function(){
        //         startSpider(nextLink);
        //     },300)
        // }
        // });
    }).on('error', function (err) {
        console.log(err);
    });
    })
}


//该函数的作用：在本地存储所爬取到的图片资源
function savedImg($,news_title) {
    var base64Data = news_item.imgSrc.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("image.png", dataBuffer, function(err) {
        if(err){
        //   res.send(err);
        }else{
        //   res.send("保存成功！");
        console.log("保存成功");
        }
    });

}

startSpider(url);      //主程序开始运行


// startSpider(url);      //主程序开始运行
// var imgData=`data:image/png;base64,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`;

// var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
// var dataBuffer = new Buffer(base64Data, 'base64');
// fs.writeFile("image.png", dataBuffer, function(err) {
//     if(err){
//     //   res.send(err);
//     }else{
//     //   res.send("保存成功！");
//     }
// });


