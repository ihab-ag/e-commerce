<?php
    include('connection.php');
    // connect to db
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $sellerID = $_POST['seller_id'];
    // connect to db
    $query= $mysqli->prepare('DELETE FROM sellers WHERE id=?;');
    $query->bind_param('d', $sellerID);
    // query to put client into the banned list
    if(!$query->execute()) {
        //statement failed
        echo json_encode(["success" => false]);
        die("Error in unban-client-api");
    }
    //statement succeeded
    echo json_encode(["success" => true]);
?>