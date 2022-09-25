<?php
    include('connection.php');
    // connect to db
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $email = $_POST['seller_email'];
    $currentSellerId = $_POST['seller_id'];
    // connect to db
    $query= $mysqli->prepare('SELECT email FROM sellers WHERE email=? AND id!=?;');
    $query->bind_param('sd', $email, $currentSellerId);
    // query to put client into the banned list
    if(!$query->execute()) {
        //statement failed
        die("Error in check-email-api");
    }
    $results = $query->get_result();
    $count = mysqli_num_rows($results);
    if($count === 0) {
        echo json_encode(["emailTaken" => false]);
    }else {
        echo json_encode(["emailTaken" => true]);
    }
?>