<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // cors access
    include("connection.php");
    // connect db
    $email=$_POST['email'];
    $pass=$_POST['pass'];
    // get info
?>