<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    include('validate-jwt.php');
    //  connect to db
    if($validity=='valid')
    {    
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
        
    }
    else
    echo "invalid token";
?>