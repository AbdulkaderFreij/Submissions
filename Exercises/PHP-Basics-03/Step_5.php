<?php 

function rectangleOrRhombus($w, $l, $d){

    if (($d*$d===$w*$w+$l*$l)&&($w===$l)){
        echo "square";
        
    }
    else if ($d*$d===$w*$w+$l*$l){
        echo "rectangle";
    }
    
    else if ($w===$l){
        echo "rombus";
    }
else echo "parallelogram";

}

rectangleOrRhombus(1,1,sqrt(2));




?>