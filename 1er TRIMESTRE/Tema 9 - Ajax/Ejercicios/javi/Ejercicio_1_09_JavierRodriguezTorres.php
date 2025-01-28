<?php

//Definimos variables
define('SERVER', 'localhost');
define('USER', 'root');
define('PASS', null);
define('BD', 'Tema10');
define('CHARSET', 'utf8mb4');
define('COLLECTION', 'utf8mb4_unicode_ci');


try {

    //Control si recibe una variable id
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    // nombre fuente de datos
    $dsn = "mysql:host=" . SERVER . ";dbname=" . BD;

    // array de opciones para la clase pdo
    $options = [

        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . CHARSET . " COLLATE " . COLLECTION

    ];

    // realizo la conexión
    $pdo = new PDO($dsn, USER, PASS, $options);

    // sentencia sql
    $sql = '';

    if ($id != null) {
        $sql = "
    SELECT 
        *
    FROM
        datos
    WHERE 
        id = :id    
        ;
    ";
    } else {
        $sql = "
    SELECT 
        *
    FROM
        datos;
    ";
    }

    // obtengo objeto clase pdostatement
    $stmt = $pdo->prepare($sql);

    //En caso de recibir id, usar bindParam
    if ($id != null) {
        $stmt->bindParam(':id', $id);
    }

    // establezco tipo de fetch
    $stmt->setFetchMode(PDO::FETCH_ASSOC);

    // ejectuto
    $stmt->execute();

    // devuelvo los datos
    echo (json_encode($stmt->fetchAll()));

} catch (PDOException $e) {
    exit();
}