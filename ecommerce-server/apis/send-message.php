<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect db
    $room_id=$_POST['room_id'];
    $sender=$_POST['sender'];
    $message=$_POST['message'];
    $date = new DateTime();
    $date->format('Y-m-d H:i:s');
    // get values
?>