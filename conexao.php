<?php 
	define('HOST', 'localhost');
	define('USER', 'root');
	define('PASS', '');
	define('DBNAME', 'imagens');

// trabalhe - banco imagens
// login - banco logins
	$conn = new PDO('mysql:host='.HOST.';dbname='.DBNAME.';',USER,PASS);
 ?>