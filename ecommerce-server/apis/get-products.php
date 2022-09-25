<?php
     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     include('connection.php');

     $productID = $_POST['product_id'];
     
     $query = $mysqli->prepare("SELECT * FROM products WHERE id=?");
     $query->bind_param('d', $productID);

     if(!$query->execute()) {
        die("Error in get product by id");
     }

     $results = $query->get_result();
     $response = [];
     while($result = $results->fetch_assoc()) {
        $response[] = $result;
     }

     echo json_encode($response);