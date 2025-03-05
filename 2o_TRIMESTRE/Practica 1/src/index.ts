import express from "express";
import $ from "jquery";
import fetch from "node-fetch"; // Necesario en Node.js para usar fetch

const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ 1. Ruta para probar el servidor
app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

// ✅ 2. Ruta para obtener datos con Fetch
app.get("/api/data", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) throw new Error("Error en la API externa");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error obteniendo datos" });
    }
});

// ✅ 3. Función para delay
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ✅ 4. Simulación de llamada AJAX con jQuery (Ejemplo en consola del servidor)
function loadDataWithJQuery() {
    console.log("Haciendo petición con jQuery...");
    $.get("https://jsonplaceholder.typicode.com/posts/1", (data) => {
        console.log("Datos recibidos con jQuery:", data);
    });
}

// ✅ 5. Ejecutar código asincrónico al iniciar el servidor
(async () => {
    console.log("Esperando 1 segundo...");
    await delay(1000);

    console.log("Haciendo petición con Fetch...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Datos recibidos con Fetch:", data);

    loadDataWithJQuery();
})();

// ✅ 6. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
