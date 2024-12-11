<?php
$servidor = 'localhost';
$baseDatos = 'tema10';
$usuario = 'root';
$pass = '';

try{
    $pdo = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $pass);
    $pdo->setAttribute(pdo::ATTR_ERRMODE, pdo::ERRMODE_EXCEPTION);

    
}catch(PDOException $e){
    echo "Error: " . $e->getMessage();
}