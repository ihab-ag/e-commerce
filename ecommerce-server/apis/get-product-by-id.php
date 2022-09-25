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
     $result = $results->fetch_assoc();

     echo json_encode([
        "id" => $result['id'],
        "name" => $result['name'],
        "description" => $result['description'],
        "price" => $result['price'],
        "views" => $result['views'],
        "image" => $result['image'],
        "categories_id" => $result['categories_id'],
     ]);