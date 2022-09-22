<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect to db
    $client_id = $_POST['client_id'];
    $seller_id = $_POST['seller_id'];
    // get post params
    $query= $mysqli->prepare("SELECT id FROM chat_rooms WHERE sellers_id= ? AND clients_id= ?");
    $query->bind_param("ii",$seller_id,$client_id);
    $query->execute();
    $array=$query->get_result();
    // check if chat room exists
    if(!$a=$array->fetch_assoc()){
        $query= $mysqli->prepare("INSERT INTO `chat_rooms` (`sellers_id`, `clients_id`) VALUES ( ? , ? );");
        $query->bind_param("ii",$seller_id,$client_id);
        $query->execute();
        $query= $mysqli->prepare("SELECT id FROM chat_rooms WHERE sellers_id= ? AND clients_id= ?");
        $query->bind_param("ii",$seller_id,$client_id);
        $query->execute();
        $array=$query->get_result();
        $a=$array->fetch_assoc();
    }
    // create room if it doesn't exist
     $response=[];
     $response['chat_id']=$a['id'];
     $json = json_encode($response);
    echo $json;
    // respond with id
    
?>