const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js Server!',
    timestamp: new Date().toISOString(),
    server: 'node-server',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    server: 'node-server',
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Node.js server running on port ${PORT}`);
});
