<?php
if(isset($_GET['number']))
{
    $num = $_GET['number'];
    $result=1;
    for($i=1; $i<=$num; $i++){

        $result *= $i;
    }
    return json_encode($result);
}
else
{
    echo "Введенные данные некорректны";
}
?>