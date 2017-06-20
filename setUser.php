<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

if(isset($_POST['name']) && isset($_POST['age']))
{
    $name = $_POST['name'];
    $age = $_POST['age'] + 10;
    // обновление данных в json-файле или базе данных
    $user = array("name"=> $name, "age" => $age);
    // отдаем обратно объект
    echo json_encode($user);
}
else
{
    echo "Введенные данные некорректны";
}
?>