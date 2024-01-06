const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const cors = require('cors');
const RegisterRoute = require("./RegisterRoute");
const LoginRoute = require("./LoginRoute");



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../front-end/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../front-end/build', 'index.html'));
});

// Use express json and cors middleware
app.use(express.json());
app.use(cors());

// Endpoint API routes
app.post('/api/login', LoginRoute());
app.post('/api/register', RegisterRoute());

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
