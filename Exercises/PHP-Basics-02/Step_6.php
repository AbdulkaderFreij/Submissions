<?php
function sum($num){
$var=strlen($num);
$arr= str_split($num);
echo $var;
print_r($arr);
$sum=0;

for ($i=0; $i<$var; $i++){
    $sum+=$arr[$i];
}
echo $sum;
}

sum("23");

?>