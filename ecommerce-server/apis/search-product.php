<?php
    include('connection.php');
    header('Access-Control-Allow-Origin: *');//access by anybody with no auth
    header('Content-Type: application/json');
    $search = $_POST['product_search'];
    // connect to db
    $query= $mysqli->prepare("SELECT * FROM products WHERE name LIKE concat('%', ?, '%') OR description LIKE concat('%', ?, '%') LIMIT 10;");
    $query->bind_param("ss", $search, $search);
    $query->execute();
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