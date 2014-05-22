<?php
date_timezone_set('America\Sao_Paulo');

error_reporting(-1);
ini_set('display_errors', 1);

header('Content-Type: text/html; charset=utf-8');

ob_start();
require dirname(__FILE__).'/includes/main.php';

$content = ob_get_contents();
echo $content;
