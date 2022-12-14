<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    // connect to db
    $query= $mysqli->prepare('SELECT
    `id`,
    `name`,
    `email`,
    `phone`,
    DATE_FORMAT(`joined_date`,"%b, %e, %Y") AS joined_date
FROM
    `clients`
ORDER BY id DESC
LIMIT 10;');
    // query to get clients
    if(!$query->execute()) {
        die("Error in view-clients-api");
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