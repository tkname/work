<?php
    require_once("./config/config.php");


    try{
        // echo "222";
        $connect = Db::getInstance()->dbConnect();
        // var_dump($connect);
    }catch (Exception $e){
        return Response::show('400','数据库链接失败');
    }

    $action = $_REQUEST['action']; //获取get值


    switch($action){
        case 'user-all':
            $sql="SELECT age,name,sex FROM user ";
            // print_r($connect);
            $query=mysqli_query($connect,$sql);
            // var_dump($query);

            $data=array();
            while($result = mysqli_fetch_assoc($query)){
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
            $query=mysqli_query($connect,$sql);
            
            if($query){
                return Response::show('200','添加成功');
            }
            break;            
        default:
            echo "查询错误";
            break;
    }

?>