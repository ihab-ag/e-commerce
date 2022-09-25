<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    include('validate-jwt.php');
    //  connect to db
    $amount=$_POST['amount'];
    $date=date('Y-m-d');
    if($validity=='valid')
    {    
        $query=$mysqli->prepare("INSERT INTO `receipts` (`id`, `amount`, `client_id`, `date`) VALUES (NULL, ?, ?, ?);");
        $query->bind_param("iis",$amount,$id,$date);
        $query->execute();
        }
    else
    echo "invalid token";
?>