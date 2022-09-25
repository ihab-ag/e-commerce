<?php
     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     include('connection.php');

     $sellerID = $_POST['seller_id'];
     
     $query = $mysqli->prepare("SELECT p.* FROM products p, categories c WHERE p.categories_id=c.id AND c.sellers_id=?");
     $query->bind_param('d', $sellerID);

     if(!$query->execute()) {
        die("Error in get product by id");
     }

     $results = $query->get_result();
     $response = [];
     while($result = $results->fetch_assoc()) {
        $response[] = $result;
     }

     echo json_encode($response);