<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    $search = $_POST['seller_search'];
    // connect to db
    $query= $mysqli->prepare("SELECT * FROM sellers WHERE name LIKE concat('%', ?, '%') OR phone LIKE concat('%', ?, '%') OR email LIKE concat('%', ?, '%') LIMIT 10;");
    $query->bind_param("sss", $search, $search, $search);
    // query to get clients
    if(!$query->execute()) {
        die("Error in search-sellers-api");
    }
    $array = $query->get_result();
    // get results
    $response=[];

    while($a=$array->fetch_assoc()){
        $response[]= $a;
    }
    // store results in response
    $json = json_encode($response);
    echo $json;
?>