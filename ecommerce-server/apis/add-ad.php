<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
//  connect to db
    $seller=$_POST['sellers_id'];
    $image=$_POST['image'];
    $date=$_POST['validity_date'];
    // get innfo
    $query=$mysqli->prepare('INSERT INTO `ads` (`id`, `image`, `sellers_id`, `validity_date`) VALUES (NULL, ?, ?, ?);');
    $query->bind_param("sis",$image,$seller,$date);
    $query->execute();
    // insert to db

?>