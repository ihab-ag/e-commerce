<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
//  connect to db
    $name=$_POST['name'];
    $description=$_POST['description'];
    $price=$_POST['price'];
    $image=$_POST['image'];
    $categories_id=$_POST['categories_id'];
    $date=date("Y-m-d");
    // get innfo
    $query=$mysqli->prepare('INSERT INTO `products` (`id`, `name`, `description`, `price`, `views`, `image`, `categories_id`, `issue_date`) 
    VALUES (NULL, ?, ?, ?, 0, ?, ?, ?);');
    $query->bind_param("ssisss",$name,$description,$price,$image,$categories_id,$date);
    $query->execute();
    // insert to db

?>