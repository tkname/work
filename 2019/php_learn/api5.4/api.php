<?php
    require_once("./config/config.php");


    try{
        $connect = Db::getInstance()->dbConnect();
    }catch (Exception $e){
        return Response::show('400','数据库链接失败');
    }

    $action = $_REQUEST['action']; //获取get值


    switch($action){
        case 'user-all':
            $sql="SELECT age,name,sex FROM user ";
            $query=@mysql_query($sql,$connect);
            $data=array();
            while($result = mysql_fetch_assoc($query)){
                $data[] = $result;
            }                       
            if(empty($data)){
                return Response::show('400','查询失败');
            }else{
                return Response::show('200','查询成功',$data);
            } 
            break;
        case 'user-add':
            $userName=$_REQUEST["userName"];
            $sex=$_REQUEST["sex"];
            $age=$_REQUEST["age"];

            $sql="insert into user(name,sex,age) VALUES ('$userName',$sex,$age)";
            $query=@mysql_query($sql,$connect);
            
            if($query){
                return Response::show('200','添加成功');
            }
            break;            
        default:
            echo "查询错误";
            break;
    }

?>