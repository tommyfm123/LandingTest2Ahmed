// server.js
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/config', (req, res) => {
    res.json({
        pixelId: process.env.PIXEL_ID,
        accessToken: process.env.ACCESS_TOKEN
    });
});

// Configura el servidor para servir los archivos estáticos
app.use(express.static('public'));

app.listen(3000, () => console.log('Server running on port 3000'));
