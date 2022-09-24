<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // cors access
    include("connection.php");
    // connect db
    $email=$_POST['email'];
    $password=$_POST['password'];
    // get info
    $query= $mysqli->prepare("SELECT `id` FROM `clients` WHERE email=? AND password=?");
    $query->bind_param("ss",$email,$password);
    $query->execute();
    $array=$query->get_result();
    // check if use exists
    if($a=$array->fetch_assoc()){
        $id=$a['id'];
        // JWT header
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        // JWT payload
        $payload = json_encode(['user_id' => $id,'validity'=> date("dm")]);
        // Encode Header to Base64Url String
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        // Encode Payload to Base64Url String
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
        // Hash header and payload to form signature
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);
        // Encode Signature to Base64Url String
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
        // Form JWT
        $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
        echo json_encode($jwt);
    }
    else
    echo json_encode("Wrong user credentials");
?>