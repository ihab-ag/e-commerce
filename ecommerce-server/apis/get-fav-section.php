<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('connection.php');
    // connect to db
    include('validate-jwt.php');
    // validate token
    if($validity=='valid'){
        // get fav category
        $query=$mysqli->prepare("SELECT DISTINCT categories.name FROM favourits, products, categories WHERE favourits.client_id= ? AND favourits.products_id=products.id AND products.Categories_id=categories.id LIMIT 1;");
        $query->bind_param("i",$id);
        $query->execute();
        $array=$query->get_result();
        $category_name=$array->fetch_assoc()['name'];
        $response=[];
        $response[]=[
            "category"=>$category_name
        ];
        // get fav category products
        $query=$mysqli->prepare('SELECT products.id, products.name, products.description, products.price, products.image
        FROM categories, products
        WHERE products.Categories_id=categories.id AND categories.name= ? LIMIT 5');
        $query->bind_param("s",$category_name);
        $query->execute();
        $array=$query->get_result();
        while($a=$array->fetch_assoc()){
            $response[]=$a;
        }
        $json= json_encode($response);
        echo $json;
    }
    else
    echo 'invalid token';
?>