<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect to db
    include('validate-jwt.php');
    // validate token
    if($validity=='valid'){
        $product_id=$_POST['product_id'];
        $query=$mysqli->prepare("INSERT INTO `favourits` (`client_id`, `products_id`) VALUES ( ? , ? );");
        $query->bind_param("ii",$id,$product_id);
        $query->execute();
        // add to favorites table
    }
    else
    echo "invalid token";
?>