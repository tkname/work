<?php

    // $dbHost="58.87.83.249:63835";
    // $name="root";
    // $password="cs123456";
    // $dbName="test";

    $dbHost="localhost:3306";
    $name="root";
    $password="";
    $dbName="test";

    // 连接
    try{
        //pod 数据库连接
        $content=new PDO("mysql:host=$dbHost;dbname=$dbName",$name,$password);
        $content->exec("set names utf8");
        // echo "连接成功";
    }catch (PDOException $e) {
        die ("Error!: " . $e->getMessage() . "<br/>");
    }

    //是否有请求的方法
    $action=isset($_REQUEST['action'])?$_REQUEST['action']:'';

    switch($action){
        case "user-all":
            $sql="SELECT id,name,age,`desc` FROM user";
            $start=$content->prepare($sql); //备要执行的SQL语句并返回一个 PDOStatement 对象
            $result=$start->execute();//执行一条预处理语句 .成功时返回 TRUE, 失败时返回 FALSE 

            if($result){
                //去获取执行结果
                $rows = $start->fetchAll();
                // var_dump($rows);
                // echo "成功";
            }else{
              echo "sql 执行错误";
            }
            break;
        case "user-add":
            echo "1111";
            $name=isset($_REQUEST['name'])?$_REQUEST['name']:'';
            $age=isset($_REQUEST['age'])?$_REQUEST['age']:'';
            $desc=isset($_REQUEST['desc'])?$_REQUEST['desc']:'';

            $sql="INSERT INTO user( name,age,`desc`) VALUES ( '$name',$age,'$desc')";
            
            $start=$content->prepare($sql); //备要执行的SQL语句并返回一个 PDOStatement 对象
            $result=$start->execute();//执行一条预处理语句 .成功时返回 TRUE, 失败时返回 FALSE 

            if($result){
                //去获取执行结果
                $rows = $start->fetchAll();
                // var_dump($rows);
                // echo "成功";
            }else{
              echo "sql 执行错误";
              echo $sql;
            }

            break;           
        default:
            echo "参数错误";
    }
    
?>