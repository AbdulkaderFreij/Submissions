<?php 

function eightStars($stars){
    $x="*";
    while ($stars<8){
        
        
        echo $x;
        echo "\n";
        $x= $x."*";
        $stars += 1;
    }
}

eightStars(0);


?>