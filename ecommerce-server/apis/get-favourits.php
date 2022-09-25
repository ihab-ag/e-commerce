<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    include('validate-jwt.php');

    if($validity=='valid')
    {    //  connect to db
        $query=$mysqli->prepare("SELECT products.*
        FROM favourits, products 
        WHERE favourits.client_id=? AND favourits.products_id=products.id;");
        $query->bind_param("i",$id);
        $query->execute();
        $array=$query->get_result();
        // get query
        $response=[];
        while($a=$array->fetch_assoc()){
            $response[]=$a;
        }
        // store results in array
        $json= json_encode($response);
        echo $json;}
    else
    echo "invalid token";
?>