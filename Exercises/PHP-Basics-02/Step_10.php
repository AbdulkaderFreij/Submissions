<?php
function isPalindrome($word){
    $var = str_replace(' ', '', $word);
    $test=strrev($var);
if ($var==$test){
    echo $word . " is Palindrome";
}
else echo $word . " isn't a palindrome";
}
isPalindrome("hello");

?>