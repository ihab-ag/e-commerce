<?php
     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     include('connection.php');
    //  connect to db

    $seller_id= $_POST['sellers_id'];
    $category=$_POST['category'];
    // get info
    $query=$mysqli->prepare("INSERT INTO `categories` (`id`, `name`, `sellers_id`) VALUES (NULL, ? , ?);");
    $query->bind_param("si",$category,$seller_id);
    $query->execute();
    // add category

    $query2 = $mysqli->prepare('SELECT id, name FROM categories ORDER BY id DESC LIMIT 1');
    if(!$query2->execute()) {
        die("Error in get Categories");
    }
    $results = $query2->get_result();
    $result = $results->fetch_assoc();
    $id = $result['id'];
    $name = $result['name'];
    echo json_encode(['id' => $id, 'name' => $name]);
?>