<?php
$mysqli = new mysqli("anyhost", "root", "1234", "practice");

// Check connection
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}
else echo"hi"
?>
