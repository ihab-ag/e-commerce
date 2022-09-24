<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Allow-Control-Allow-Headers: Allow-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
    // connect to db

    $query= $mysqli->prepare('select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 366 day) and (now() - interval 276 day)
GROUP BY issue_date 
ORDER BY issue_date DESC');
    // query to get products
    if(!$query->execute()) {
        die("Error in latest-signed-products");
    }
    $array = $query->get_result();
    // get results
    $response=[];
    $counterQ1 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ1 += $a['products_count'];
    }
    $response['counter_products_q1'] = $counterQ1;

    $query2= $mysqli->prepare('select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 276 day) and (now() - interval 186 day)
GROUP BY issue_date 
ORDER BY issue_date DESC');
    // query2 to get products
    if(!$query2->execute()) {
        die("Error in latest-signed-products");
    }
    $array = $query2->get_result();
    $counterQ2 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ2 += $a['products_count'];
    }
    $response['counter_products_q2'] = $counterQ2;

    $query3= $mysqli->prepare('select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 186 day) and (now() - interval 96 day)
GROUP BY issue_date 
ORDER BY issue_date DESC');
    // query3 to get products
    if(!$query3->execute()) {
        die("Error in latest-signed-products");
    }
    $array = $query3->get_result();
    $counterQ3 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ3 += $a['products_count'];
    }
    $response['counter_products_q3'] = $counterQ3;

    $query4= $mysqli->prepare('select issue_date, count(id) as products_count
FROM products
WHERE issue_date between (now() - interval 96 day) and now()
GROUP BY issue_date 
ORDER BY issue_date DESC');
    // query4 to get products
    if(!$query4->execute()) {
        die("Error in latest-signed-products");
    }
    $array = $query4->get_result();
    $counterQ4 = 0;
    while($a=$array->fetch_assoc()){
        $counterQ4 += $a['products_count'];
    }
    $response['counter_products_q4'] = $counterQ4;
    // store results in response
    $json = json_encode($response);
    echo $json;
?>