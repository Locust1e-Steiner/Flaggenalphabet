const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Primär aus public/ servieren
app.use(express.static(path.join(__dirname, 'public')));
// Fallback: root js/ für flags-data.js und app.js (ICS Maritim)
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Flaggenalphabet server running at http://localhost:${PORT}`);
});
