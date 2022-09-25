<?php
    include('connection.php');
    // connect to db
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $clientID = $_POST['client_id'];
    // connect to db
    $query= $mysqli->prepare('SELECT clients_id FROM banned_users WHERE clients_id=?;');
    $query->bind_param('d', $clientID);
    // query to put client into the banned list
    if(!$query->execute()) {
        //statement failed
        die("Error in check-client-banned");
    }
    $results = $query->get_result();
    $count = mysqli_num_rows($results);
    if($count === 0) {
        echo json_encode(["banned" => false]);
    }else {
        echo json_encode(["banned" => true]);
    }
?>