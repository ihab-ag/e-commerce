<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    //  connect to db
    $seller_id=$_POST["sellers_id"];
    $query=$mysqli->prepare("SELECT id, name FROM `categories` WHERE sellers_id=?");
    $query->bind_param("i",$seller_id);
    $query->execute();
    $array=$query->get_result();
    // get query
    $response=[];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }
    // store results in array
    $json= json_encode($response);
    echo $json;
?>