<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    //  connect to db
    $query=$mysqli->prepare("SELECT `image` FROM `ads` WHERE validity_date > CURRENT_DATE LIMIT 5;");
    $query->execute();
    $array=$query->get_result();
    // get query
    $response=[];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }
    // store results in array
    $json= json_encode($response);
    echo $json;
?>