<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    // connect to db

    $query= $mysqli->prepare('select joined_date, count(id) as sellers_count FROM sellers WHERE joined_date between (now() - interval 366 day) and (now() - interval 276 day) GROUP BY joined_date ORDER BY joined_date DESC');
    // query to get clients
    if(!$query->execute()) {
        die("Error in latest-signed-sellers");
    }
    $array = $query->get_result();
    // get results
    $response=[];
    $counterQ1 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ1 += $a['sellers_count'];
    }
    $response['counter_sellers_q1'] = $counterQ1;

    $query2= $mysqli->prepare('select joined_date, count(id) as sellers_count
    FROM sellers
    WHERE joined_date between (now() - interval 276 day) and (now() - interval 186 day)
    GROUP BY joined_date 
    ORDER BY joined_date DESC');
    // query2 to get clients
    if(!$query2->execute()) {
        die("Error in latest-signed-sellers");
    }
    $array = $query2->get_result();
    $counterQ2 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ2 += $a['sellers_count'];
    }
    $response['counter_sellers_q2'] = $counterQ2;

    $query3= $mysqli->prepare('select joined_date, count(id) as sellers_count
    FROM sellers
    WHERE joined_date between (now() - interval 186 day) and (now() - interval 96 day)
    GROUP BY joined_date 
    ORDER BY joined_date DESC');
    // query3 to get clients
    if(!$query3->execute()) {
        die("Error in latest-signed-sellers");
    }
    $array = $query3->get_result();
    $counterQ3 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ3 += $a['sellers_count'];
    }
    $response['counter_sellers_q3'] = $counterQ3;

    $query4= $mysqli->prepare('select joined_date, count(id) as sellers_count
    FROM sellers
    WHERE joined_date between (now() - interval 96 day) and now()
    GROUP BY joined_date 
    ORDER BY joined_date DESC');
    // query4 to get clients
    if(!$query4->execute()) {
        die("Error in latest-signed-sellers");
    }
    $array = $query4->get_result();
    $counterQ4 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ4 += $a['sellers_count'];
    }
    $response['counter_sellers_q4'] = $counterQ4;
    // store results in response
    $json = json_encode($response);
    echo $json;
?>