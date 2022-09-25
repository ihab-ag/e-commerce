<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
//  connect to db
    $name=$_POST['name'];
    $description=$_POST['description'];
    $price=$_POST['price'];
    $image=$_POST['image'];
    $id=$_POST['id'];
    // get innfo
    $query=$mysqli->prepare("UPDATE `products` SET `name`=?,`description`=?,`price`=?,`image`=? WHERE products.id=?;");
    $query->bind_param("ssisi",$name,$description,$price,$image,$id);
    $query->execute();
    // update product

?>