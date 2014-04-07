<?

/* Rj Minimize scripts */
/* Autor: Raphael Jordany */
/* Version:1.0 */
/* Use: <link rel="stylesheet" href="rjminimize.php?name=arquive.css&type=css&path=path_css/css.php"> */
 
$cacheFolder = 'assets/cache/';
$finalName = $_GET['name'];
$finalPath = $_GET['path'];
$finalType = strtolower($_GET['type']);

switch($finalType){
	case 'css':
		header('Content-type: text/css');
	break;
	case 'js':
		header('Content-Type: text/javascript');
	break;
}

if(!file_exists($cacheFolder . $finalName)){
	$fileTags = file_get_contents($finalPath , true);
	$dom = new DOMDocument();
	$dom->loadHTML($fileTags);
	$a = $dom->getElementsByTagName("link");
	$bloco = " /* RjMinimize Files */ \n";
	
	foreach($a as $element)
	{
	   $filePath = $element->getAttribute('href');
	   $fileName = explode('/', $filePath);
	   $bloco .= "\n  /* file:". $fileName[ count($fileName)-1]. " */ \n";	
	   $fileContent = file_get_contents($filePath , true);
	   $bloco .= compress($fileContent);  
	}
	
	$script = $dom->getElementsByTagName("script");
	foreach($script as $element)
	{
	   $filePath = $element->getAttribute('src');
	   $fileName = explode('/', $filePath);
	   $bloco .= "\n  /* file:". $fileName[ count($fileName)-1]. " */ \n";	
	   $fileContent = file_get_contents($filePath , true);
	   $bloco .= compress($fileContent);  
	}
	
	
	$Handle = fopen($cacheFolder . $finalName, 'w');
	fwrite($Handle, $bloco); 
	fclose($Handle); 
 };
 
function compress($buffer) 
{
 $buffer = preg_replace("!/\*[^*]*\*+([^/][^*]*\*+)*/!", "", $buffer) ;
 $arr = array("\r\n", "\r", "\n", "\t", "  ", "    ", "    ") ;
 $buffer = str_replace($arr, "", $buffer) ;
 return $buffer;
}
 
 echo file_get_contents($cacheFolder . $finalName, true);
 
 
?>