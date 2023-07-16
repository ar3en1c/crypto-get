<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET');
try{
    $db = new PDO('sqlite:' . __DIR__ . '/pic-address.db');
    $coin = $_GET['COIN'];
    $qgetdata = $db->query("SELECT * FROM picroute where name = '$coin'");
    $getdata = $qgetdata->fetchAll(PDO::FETCH_ASSOC);
    $option = [];
    foreach ($getdata as $value) {
        echo json_encode($value['Route']);
    }
}
catch(PDOException $e){
    echo $e->getMessage();

}

$db= null;
