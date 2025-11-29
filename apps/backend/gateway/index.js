const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', service: 'Gateway' });
});

// Proxy routes
app.use('/auth', createProxyMiddleware({ target: 'http://localhost:8001', changeOrigin: true }));
app.use('/users', createProxyMiddleware({ target: 'http://localhost:8002', changeOrigin: true }));
app.use('/match', createProxyMiddleware({ target: 'http://localhost:8003', changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});
