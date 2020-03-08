<?php
function isPowerOfTwo($num){

if ($num== sqrt($num) ** 2){
    echo $num , " is power of two", "\n";
}

else echo $num, " isnt power of two", "\n";
       
}


isPowerOfTwo(15);

?>