<?php

function isPrime($number){
    if ( $number == 1 ) {
        echo $number, " isn't a prime";
    }
    if ( $number == 2 ) {
        echo $number, " is a prime";
    }
    $x = sqrt($number);
    $x = floor($x);
    for ( $i = 2 ; $i <= $x ; ++$i ) {
        if ( $number % $i == 0 ) {
            break;
        }
    }
    "\n";
    echo $i."\n";
    echo $x."\n";
    "\n";
    if( $x == $i-1 ) {
        echo $number, " is a prime";
    } else {
        echo $number, " isn't a prime";
    }
}
isPrime(17);
?>