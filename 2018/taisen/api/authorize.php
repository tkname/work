<?php
date_default_timezone_set("PRC");
define("CAPPID", "wx993336204bad5f58");
define("APPSECRET", "35fbadc15a3613ca28e22946be969ae8");
define("AESKEY","abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG");
define("TOKEN","hocodo");
define("APPID","wxf602a7df1d0a325a");
define("REDIRECT_URI","http://minisite.hocodo.com/test/taisen/api/auth.php");

header("location:https://open.weixin.qq.com/connect/oauth2/authorize?appid=".APPID."&redirect_uri=".REDIRECT_URI."&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=".CAPPID."#wechat_redirect");




