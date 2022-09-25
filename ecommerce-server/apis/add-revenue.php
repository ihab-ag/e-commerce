<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    //  connect to db
    $product_id=$_POST['products_id'];
    $query=$mysqli->prepare("SELECT products.price, sellers.id FROM sellers, products, categories WHERE products.Categories_id=categories.id AND categories.sellers_id=sellers.id AND products.id=?;");
    $query->bind_param("i",$product_id);
    $query->execute();
    $array=$query->get_result();
    // get seller id and product price
    $a=$array->fetch_assoc();
    $price=$a['price'];
    $seller_id=$a['id'];
    $date=date("Y-m-d");
    $query=$mysqli->prepare("INSERT INTO `revenues`(`id`, `amount`, `date`, `sellers_id`)
    VALUES(
        NULL,
        ?,
        ?,
        ?
    )");
    $query->bind_param("isi",$price,$date,$seller_id);
    $query->execute();

?>