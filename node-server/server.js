const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    "🎯 Server": "Node.js Express",
    "📌 Message": "Hello from Node.js Server!",
    "🕐 Timestamp": new Date().toISOString(),
    "💻 Container": "node-server",
    "⚡ Status": "✅ Running",
    "🔗 Port": 3001,
    "📊 Framework": "Express.js"
  });
});

app.get('/health', (req, res) => {
  res.json({
    "💚 Status": "✅ Healthy",
    "📍 Server": "node-server",
    "⏱️ Uptime (seconds)": Math.floor(process.uptime()),
    "🕐 Check Time": new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Node.js server running on port ${PORT}`);
});