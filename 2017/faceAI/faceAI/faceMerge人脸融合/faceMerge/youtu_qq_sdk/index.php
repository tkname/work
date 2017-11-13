<?php
header("Access-Control-Allow-Origin: *"); //跨域处理
require('./include.php');
use TencentYoutuyun\Youtu;
use TencentYoutuyun\Conf;


// 设置APP 鉴权信息 请在http://open.youtu.qq.com 创建应用

$appid='10092830';
$secretId='AKIDMbisv8FCyY4SnwJsZ4QccQ3UnCTou4va';
$secretKey='b1GMK7iCUaYN1UlqohOtDLH1bzBB6ygD';
$userid='426049918';


Conf::setAppInfo($appid, $secretId, $secretKey, $userid,conf::API_YOUTU_END_POINT );

$filename="5.jpg";//$_GET['file'];

/**
  * 修改一个图片 让其翻转指定度数
  * 
  * @param string  $filename 文件名（包括文件路径）
  * @param  float $degrees 旋转度数
  * @return boolean
  * @author zhaocj
  */
   function  flip($filename,$src,$degrees = 270)
 {
  //读取图片
  $data = @getimagesize($filename);
  if($data==false)return false;
  //读取旧图片
  switch ($data[2]) {
   case 1:
    $src_f = imagecreatefromgif($filename);break;
   case 2:
    $src_f = imagecreatefromjpeg($filename);break;
   case 3:
    $src_f = imagecreatefrompng($filename);break;
  } 
  if($src_f=="")return false;
  $rotate = @imagerotate($src_f, $degrees,0);
  if(!imagejpeg($rotate,$src,80))return false;
  @imagedestroy($rotate);
  return true;
 }
 
 $filename=dirname(dirname(__FILE__))."/".$filename;
 $data = @getimagesize($filename);
 //var_dump($data);
 if($data[0]>$data[1]){ // if width>height
	 flip($filename,$filename);
 }
// 人脸检测 调用列子
$uploadRet = YouTu::detectface(  $filename, 1);
echo json_encode($uploadRet);


// 人脸定位 调用demo
//$uploadRet = YouTu::faceshape('a.jpg', 1);
//var_dump($uploadRet);

//黄图识别
//$uploadRet = YouTu::imageporn('test.jpg', 1);
//var_dump($uploadRet);
//$uploadRet = YouTu::imagepornurl('http://open.youtu.qq.com/content/img/product/face/face_05.jpg', 1);
//var_dump($uploadRet);

//身份证ocr

//$uploadRet = YouTu::idcardocr('test.jpg', 1);
//var_dump($uploadRet);
//$uploadRet = YouTu::idcardocrurl('http://open.youtu.qq.com/content/img/product/face/face_05.jpg', 1);
//var_dump($uploadRet);

//名片
//$uploadRet = YouTu::namecardocr('test.jpg', 1);
//var_dump($uploadRet);
//$uploadRet = YouTu::namecardocrurl('http://open.youtu.qq.com/content/img/product/face/face_05.jpg', 1);
//var_dump($uploadRet);

?>