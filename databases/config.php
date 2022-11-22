<?php
define("SERVER_NAME", "localhost");
define("DB_NAME", "realistic_asia");
define("USERNAME", "root");
define("PASSWORD", "");

$connection = null;

try {
  $connection = new PDO("mysql:host=" . SERVER_NAME . ";dbname=" . DB_NAME, USERNAME, PASSWORD);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $connection->exec("set names utf8");
  // echo "mysql:host=" . SERVER_NAME . ";db_name=" . DB_NAME, USERNAME, PASSWORD;
} catch (Exception $e) {
  echo "Connection Error: " . $e->getMessage();
  $connection = null;
}

?>
