<?php

function sum($number){
    $x=0;

    for ($i=0; $i<strlen($number); $i+=1){
        
        $x+= $number[$i];
    
    }
    echo $x;
}
sum("12345");
?>