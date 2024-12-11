<?php
$host = 'localhost';
$dbname = 'tema10';
$user = 'root'; // Por defecto, el usuario en XAMPP es root
$pass = ''; // Por defecto, la contraseña en XAMPP está vacía

// Conectar a la base de datos
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
    exit;
}

// Leer la acción que se desea realizar
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Obtener todos los nombres
if ($action == 'getNames') {
    $query = "SELECT nombre FROM datos";
    $stmt = $pdo->query($query);
    $names = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($names);
}

// Obtener detalles por nombre
if ($action == 'getDetails' && isset($_GET['nombre'])) {
    $nombre = $_GET['nombre'];
    $query = "SELECT * FROM datos WHERE nombre = :nombre";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':nombre', $nombre);
    $stmt->execute();
    $details = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($details);
}
