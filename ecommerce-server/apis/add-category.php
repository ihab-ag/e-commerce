<?php
     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     include('connection.php');
    //  connect to db

    $seller_id= $_POST['sellers_id'];
    $category=$_POST['category'];
    // get info
    $query=$mysqli->prepare("INSERT INTO `categories` (`id`, `name`, `sellers_id`) VALUES (NULL, ? , ?);");
    $query->bind_param("si",$category,$seller_id);
    $query->execute();
    // add category
?>