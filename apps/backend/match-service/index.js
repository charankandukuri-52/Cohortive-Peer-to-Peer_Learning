const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ service: 'Match Service' });
});

app.post('/find-mentor', (req, res) => {
    const { skill } = req.body;
    res.json({ matches: [{ id: 1, name: 'John Doe', skill }] });
});

app.listen(PORT, () => {
    console.log(`Match Service running on port ${PORT}`);
});
