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
    
    
    
?>