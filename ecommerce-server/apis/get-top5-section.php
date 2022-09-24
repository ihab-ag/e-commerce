<?php
     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     include('connection.php');
     // connect to db
     $query= $mysqli->prepare('SELECT products.id, products.name, products.description, products.price, products.image
     FROM products ORDER BY views DESC LIMIT 5');
     $query->execute();
     $array=$query->get_result();
     $response=[];
     while($a=$array->fetch_assoc()){
        $response[]=$a;
     }
    //  get products
    $json=json_encode($response);
    echo $json;
?>