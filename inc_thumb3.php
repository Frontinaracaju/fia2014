<?php  


include('m2brimagem.class.php');
$arquivo    = $_GET['arquivo'];  	
$largura    = $_GET['largura'];  
$altura     = $_GET['altura'];  
$qualidade  = $_GET['qualidade']; 
$oImg = new m2brimagem($arquivo);  
$valida = $oImg->valida();  
if ($valida == 'OK') {  

	$oImg->redimensiona($largura,$altura,'crop'); 
	if(!$qualidade) {
	$oImg->grava(NULL,100);  
	}else{
	$oImg->grava(NULL,$qualidade);  
	}

} else {  
	die($valida);  
}  
?>  