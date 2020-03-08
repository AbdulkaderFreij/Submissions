<?php

function greaterFn($num){
  if ($num>30){
      echo $num . " is greater than 30";
  }
  else if ($num > 20){
      echo $num . " is greater than 20";
  }
  else if ($num >10){
      echo $num . " is greater than 10";
  }
  else if ($num <10){
      echo $num . " is less than 10";
  }
}
greaterFn(40); // 40 is greater than 30
echo "\n";
greaterFn(21);
echo "\n"; // 21 is greater than 20
greaterFn(12);
echo "\n"; // 12 is greater than 10
greaterFn(8); 
echo "\n"; // 8 is less than 10
?>