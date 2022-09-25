<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect db
    $room_id=$_POST['room_id'];
    // get chat room id
    $query=$mysqli->prepare("SELECT  `sender`, `message`, DATE_FORMAT(`date`,'%I:%i %p') as time  FROM `messages` WHERE chats_rooms_id= ? ORDER BY ID ASC;");
    $query->bind_param("i",$room_id);
    $query->execute();
    $array=$query->get_result();
    // get query results
    $response=[];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }
    $json=json_encode($response);
    echo $json;
    // return response
?>