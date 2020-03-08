<?php
function swap($var1, $var2){
$var3=$var1;
$var1=$var2;
$var2=$var3;

echo $var1;
echo "\n";
echo $var2;
}
swap(20,30);
?>