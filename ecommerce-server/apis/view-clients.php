<?php
    include('connection.php');
    // connect to db
    $query= $mysqli->prepare("SELECT `id`, `name`, `email`, `phone`, `joined_date` FROM `clients` LIMIT 10");
    // query to get clients
?>