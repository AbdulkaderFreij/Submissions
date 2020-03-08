<?php
function checkArm($num){
    $str=$num."";
  $test= str_split($str);
  print_r(count($test)."\n");

  $sum = 0;

  for ($i=0; $i<count($test); $i++){
      $var= $test[$i]**count($test);
      $sum+=$var;
  }
echo $sum . "\n";
  if ($sum===$num){
      echo $num. " is armstrong";
  }
  else echo $num . " isn't armstrong";
}
checkArm(372);
?>