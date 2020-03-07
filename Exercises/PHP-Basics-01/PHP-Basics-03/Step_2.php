<?php

function factorial($number){
    $x=1;
    while ($number>0){
        $x*=($number);
        $number-=1;
    }

    echo $x;
}

factorial(6);

?>