<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect db
    $room_id=$_POST['room_id'];
    $sender=$_POST['sender'];
    $message=$_POST['message'];
    $d = new DateTime();
    $date=$d->format('Y-m-d H:i:s');
    // get values
    $query=$mysqli->prepare("INSERT INTO `messages` (`sender`, `message`, `date`, `chats_rooms_id`) 
    VALUES (? , ? , ? , ?);");
    $query->bind_param("sssi",$sender,$message,$date,$room_id);
    $query->execute();
    // execute query
?>