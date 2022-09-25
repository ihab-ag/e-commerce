<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
//  connect to db
    $id=$_POST['id'];
    $start_date=$_POST['start_date'];
    $end_date=$_POST['end_date'];
    // get info
    $query=$mysqli->prepare('SELECT SUM(`amount`) as revenue FROM `revenues` WHERE sellers_id= ? AND date BETWEEN ? AND ?;');
    $query->bind_param("iss",$id,$start_date,$end_date);
    $query->execute();
    // get revenue
    $array=$query->get_result();
    $a=$array->fetch_assoc();
    $json= json_encode($a);
    echo $json;
?>