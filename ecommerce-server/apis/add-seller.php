<?php
    include('connection.php');
    // connect to db
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $sellerID = $_POST['id'];
    $name = $_POST['name'];
    $pwd = $_POST['pwd'];
    $phone = $_POST['phone'];
    $location = $_POST['location'];
    // connect to db
    $query= $mysqli->prepare('INSERT INTO sellers(name, password, phone, location, email) VALUES(?, ?, ?, ?, ?);');
    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
    $query->bind_param('sssss', $sellerID, $name, $hashedPwd, $phone, $location);
    // query to put client into the banned list
    if(!$query->execute()) {
        //statement failed
        echo json_encode(["success" => false]);
        die("Error in add-seller-api");
    }
    //statement succeeded
    echo json_encode(["success" => true]);
?>