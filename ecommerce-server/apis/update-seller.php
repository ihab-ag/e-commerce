<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    $sellerID = $_POST['seller_id'];
    $sellerName = $_POST['seller_name'];
    $sellerPhone = $_POST['seller_phone'];
    $sellerLocation = $_POST['seller_location'];
    $sellerEmail = $_POST['seller_email'];

    // connect to db
    $query= $mysqli->prepare('UPDATE sellers SET name=?, phone=?, location=?, email=? WHERE id=?;');
    $query->bind_param('ssssd', $sellerName, $sellerPhone, $sellerLocation, $sellerEmail, $sellerID);
    // query to get clients
    if(!$query->execute()) {
        echo json_encode(["success" => false]);
        die("Error in update-sellers-api");
    }else {
        echo json_encode(["success" => true]);
    }
?>