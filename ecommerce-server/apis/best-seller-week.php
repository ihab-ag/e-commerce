<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    // connect to db
    $query= $mysqli->prepare('SELECT r.sellers_id, s.name, sum(r.amount) as tot_amount
    FROM revenues r, sellers s
    WHERE r.date between now() - interval 7 day and now() AND s.id=r.sellers_id
    GROUP BY sellers_id
    ORDER BY (tot_amount) DESC
    LIMIT 3;
    ');
    // query to get clients
    if(!$query->execute()) {
        die("Error in best-sellers-year-api");
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