<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // cors access
    $jwt=$_POST['id'];
    // get jwt
    $array=[];
    $object=json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.',$jwt)[1]))));
    // decode jwt payload to string
    $array=json_decode(json_encode($object), true);
    // parse string to array
    $validity= $array["validity"]-date('dm')==0?"valid":"invalid";
    $id=$array["user_id"]; 
    echo $validity;
    
?>