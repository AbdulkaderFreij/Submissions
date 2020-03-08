<?php
function convert($word){
    $result='';
    switch ($word){
        case 'zero': $result.="0";
    break;
    case 'one': $result.="1"; echo $result;
break;
case 'two': $result.="2" ; echo $result;
break;
case 'three': $result.="3"; echo $result;
break;
case 'four': $result.="4"; echo $result;
break;
case 'five': $result.="5"; echo $result;
break;
case 'six': $result.="6"; echo $result;
break;
case 'seven': $result.="7"; echo $result;
break;
case 'eight': $result.="8"; echo $result;
break;
case 'nine': $result.="9"; echo $result;
break;
    }
}
convert("one"); 
echo "\n";
convert("two"); 
echo "\n";
convert("three"); 
echo "\n";
convert("four"); 
echo "\n";
convert("five"); 
echo "\n";
convert("six"); 
echo "\n";
convert("seven"); 
echo "\n";
convert("eight"); 
echo "\n";
convert("nine"); 
echo "\n";

?>