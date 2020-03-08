<?php

function replaceWord($text){
    // $arr=explode(" ",$text);
   $result= str_replace("Python","PHP",$text);
   print_r($result);
}


replaceWord("Write a PHP program to replace a string Python with PHP and Python with PHP in a given string. Hello Python. Python is easy.");

?>