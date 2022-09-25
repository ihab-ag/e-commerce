<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
//  connect to db
    $id=$_POST['id'];
    // get innfo
    $query=$mysqli->prepare('DELETE FROM `products` WHERE id=?');
    $query->bind_param("i",$id);
    $query->execute();
    // update product

?>