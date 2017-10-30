<?php

$data = $_POST['imgData'];

$file = uniqid().".jpg";
$filePath=dirname(__FILE__)."/uploaded/".$file ;
$uri =  substr($data,strpos($data,",")+1);

file_put_contents($filePath, base64_decode($uri));
$arr = array ('url'=>$file); 
echo $file;//json_encode($arr); 

?>