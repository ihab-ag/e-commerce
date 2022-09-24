<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    // connect to db
    $query= $mysqli->prepare('SELECT r.client_id, c.name, sum(r.amount) as tot_amount
    FROM receipts r, clients c
    WHERE r.date between now() - interval 7 day and now() AND c.id=r.client_id
    GROUP BY client_id
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