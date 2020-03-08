<?php
for ($i=0; $i<7; $i++)
{
  for ($j=0; $j<=7; $j++)
	{
     if ((($i == 0 || $i == 6) && $j >= 0 and $j <= 6) || $i+$j==6)
            echo "*";    
        else  
            echo " ";     
	}        
  echo "\n";
}
?>