import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const uri = "mongodb+srv://jjuandi8:fwl6NaVeIbn0z0Tu@basedatos.2uaqy.mongodb.net/?retryWrites=true&w=majority&appName=BaseDatos";
const client = new MongoClient(uri);
const dbName = "BaseDatos"; // Nombre de la base de datos
const collectionName = "usuarios"; // Nombre de la colección

async function connectDB() {
    await client.connect();
    console.log("✅ Conectado a MongoDB");
}
connectDB();

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta para servir el archivo HTML sin carpeta public
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta para obtener todos los usuarios
app.get("/usuarios", async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const usuarios = await collection.find().toArray();
    res.json(usuarios);
});

// Ruta para añadir un usuario
app.post("/usuarios", async (req, res) => {
    const { nombre, apellido } = req.body;
    if (!nombre || !apellido) {
        return res.status(400).json({ error: "Nombre y apellido son requeridos" });
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne({ nombre, apellido });

    res.json({ message: "Usuario añadido correctamente" });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
