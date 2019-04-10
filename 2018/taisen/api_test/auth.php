<?php
require_once dirname(dirname(dirname(dirname(__FILE__))))."/diancan/TPP/lib/MyCurl.php";
require_once dirname(dirname(dirname(dirname(__FILE__))))."/diancan/TPP/lib/model.php";

$appid=$_GET['appid'];
$code=$_GET['code'];
$component="wx993336204bad5f58";
$component_access_token=Model::componentAccessToken();

if($code){
    $url="https://api.weixin.qq.com/sns/oauth2/component/access_token?appid="
        .$appid."&code=".$code."&grant_type=authorization_code&component_appid=".$component."&component_access_token=".$component_access_token."";

    $tmp=file_get_contents($url);
    $tmp=json_decode($tmp);

    $url2="https://api.weixin.qq.com/sns/userinfo?access_token=".$tmp->access_token."&openid=".$tmp->openid."&lang=zh_CN";

    $tt=file_get_contents($url2);
    $json=json_decode($tt);
    //session_start();
   // $_SESSION['openid']=$json->openid;
    //echo $json->nickname;
    echo $tt;
}

