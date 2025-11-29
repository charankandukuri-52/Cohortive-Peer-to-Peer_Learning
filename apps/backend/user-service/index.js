const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ service: 'User Service' });
});

app.get('/profile', (req, res) => {
    res.json({ id: 1, name: 'John Doe', skills: ['React', 'Node.js'] });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
