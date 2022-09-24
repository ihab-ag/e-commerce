<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // cors access
    include("connection.php");
    // connect db
    $email=$_POST['email'];
    $password=$_POST['password'];
    // get info
    $query= $mysqli->prepare("SELECT `id` FROM `clients` WHERE email=? AND password=?");
    $query->bind_param("ss",$email,$password);
    $query->execute();
    $array=$query->get_result();
    // check if use exists
    if($a=$array->fetch_assoc()){
        $id=$a['id'];
        
    }
    else
    echo "nope";
?>