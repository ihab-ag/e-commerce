<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
//  connect to db
    $product_id=$_POST['products_id'];
    $amount=$_POST['amount'];
    $code=$_POST['code'];
    // get innfo
    $query=$mysqli->prepare('INSERT INTO `discounts` (`id`, `amount`, `products_id`, `code`)
     VALUES (NULL, ?,?,?);');
    $query->bind_param("iis",$amount,$product_id,$code);
    $query->execute();
    // insert to discount

?>