const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello from DevOps Microservice!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
