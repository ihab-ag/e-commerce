<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect to db
    include('validate-jwt.php');

    if($validity=='valid'){
        
    }
    else
    echo 'invalid token';

?>