<?php
$groceries= ["Eggs", "Milk", "Cheese", "Water Pack", "Tissues", "Watermelon"];

echo "Hello Sir, do you have ".$groceries[0].", ". $groceries[1].",". " and ". $groceries[2]. "?"." Also if you sell fruits can I find a ". $groceries[5]."?" ."\n";

$arr= ["eggs" => ["balade", "mazere3" ], "milk" => ["Fresh", "Taanayel"], "water-pack" => ["Tanoureen", "Reem"]];

echo "Hey Sir, Please I need 1 pack of balade eggs and 3 Reem Water Pack." . "\n";

echo "Hey Sir, Please I need 1 pack of " , $arr["eggs"][0]. " eggs". " and 3 ". $arr["water-pack"][1]. " Water Pack." . "\n";
?>