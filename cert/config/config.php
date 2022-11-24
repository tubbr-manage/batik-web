<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_NAME', 'new123456');
define('DB_USERNAME', 'ssluser123456');
define('DB_PASSWORD', 'sslroot');
define('DB_HOST', 'localhost');
define('KEY', 'Xdi(7sq0Ubc3za#%Nwmxp8J^C?g_k;65H$nD9y2FE4=SLKl*f1r@hQuot,v+&-jR');
                
/* Attempt to connect to MySQL database */
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
                
// Check connection
if($mysqli->connect_error){
    die('ERROR: Could not connect. ' . $mysqli->connect_error);
}
define('APP_SETTINGS_PATH', '/home/n5cx3repfcah/cert-ssl/settings/settings.json');