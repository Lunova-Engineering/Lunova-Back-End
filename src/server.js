const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const cors = require('cors');
const RegisterRoute = require("./RegisterRoute");
const LoginRoute = require("./LoginRoute");

const localDirectory = "/Users/drakeforness/Documents/Github/Lunova Engineering Web/Front End/client/";
const local = true;

// Serve static files from the React app
app.use(express.static(path.join(local ? localDirectory : __dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(local ? localDirectory : __dirname, 'build', 'index.html'));
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
