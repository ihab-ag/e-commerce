<?php
    include('connection.php');
    // connect to db
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $name = $_POST['name'];
    $pwd = $_POST['pwd'];
    $phone = $_POST['phone'];
    $location = $_POST['location'];
    $email = $_POST['email'];
    $date = date('Y-m-d');
    // connect to db
    $query= $mysqli->prepare('INSERT INTO sellers(name, password, phone, location, email, date) VALUES(?, ?, ?, ?, ?, ?);');
    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
    $query->bind_param('ssssss', $name, $hashedPwd, $phone, $location, $email, $date);
    // query to put seller into the banned list
    if(!$query->execute()) {
        //statement failed
        // echo json_encode(["success" => false]);
        die("Error in add-seller-api");
    }
    //statement succeeded
    // echo json_encode(["success" => true]);
    // email is unique
    $query2 = $mysqli->prepare('SELECT id FROM sellers WHERE email=?;');
    $query2->bind_param('s', $email);
    if(!$query2->execute()) {
        die("Error in add-seller-api selection part");
    }
    $results = $query2->get_result();
    $result = $results->fetch_assoc();
    $sellerID = $result['id']; //guaranteed one answer

    echo json_encode(["success" => true, "seller_id" => $sellerID]);

?>