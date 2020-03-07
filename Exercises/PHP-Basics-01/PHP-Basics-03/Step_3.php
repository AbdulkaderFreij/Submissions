<?php 

function search($text, $word){

   $arr= explode(" ", $text);
print_r($arr);

$x=0;
$count=0;
while ($x<count($arr)){

    

    if($arr[$x]==$word){
        $count+=1;
    }
    $x+=1;
}
echo $count;

}

search("hello world", "world");

?>