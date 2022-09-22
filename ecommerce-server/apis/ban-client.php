<?php
    include('connection.php');
    // connect to db
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $clientID = $_POST['client_id'];
    // connect to db
    $query= $mysqli->prepare('INSERT INTO banned_users VALUES(?);');
    $query->bind_param('d', $clientID);
    // query to put client into the banned list
    if(!$query->execute()) {
        //statement failed
        echo json_encode(["success" => false]);
        die("Error in ban-client-api");
    }
    //statement succeeded
    echo json_encode(["success" => true]);
?>