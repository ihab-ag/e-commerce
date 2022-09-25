<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
 //  connect to db
    $product_id=$_POST['porduct_id']
    $query=$mysqli->prepare("SELECT * FROM `products` WHERE id=$;");
    $query->bind_param("i",$product_id);
    $query->execute();
    $array=$query->get_result();
    // get query
    $response=[];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }
    // store results in array
    $json= json_encode($response);
    echo $json;

?>