const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ service: 'Auth Service' });
});

app.post('/login', (req, res) => {
    // Mock login
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.json({ token: 'mock-jwt-token' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});
