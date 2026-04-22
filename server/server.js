const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    message: 'API is working properly'
  });
});

app.post('/api/data', (req, res) => {
  const body = req.body;

  res.json({
    success: true,
    receivedData: body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});