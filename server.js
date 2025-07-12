const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL (Render proveerá DATABASE_URL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Rutas CRUD
app.get('/api/products', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM products');
    res.json(rows);
});

// Añade aquí más endpoints (POST, PUT, DELETE)...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
