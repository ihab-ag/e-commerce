<?php
    include('connection.php');
    // connect to db
    $query= $mysqli->prepare("SELECT `id`, `name`, `email`, `phone`, `joined_date` FROM `clients` LIMIT 10");
    // query to get clients
    $query->excute();
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