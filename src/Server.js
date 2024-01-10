const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const cors = require('cors');
const RegisterRoute = require("./RegisterRoute");
const LoginRoute = require("./LoginRoute");

const file_server = 'https://files.lunova.tech/site/build/index.html';

// Handles any requests that don't match the ones above
app.get('*', async (req, res) => {
    try {
        const response = await fetch(file_server, {
            headers: {
                'referer': 'www.lunova.tech'
            }
        });

        if (response.ok) {
            const body = await response.text();
            res.send(body);
        } else {
            res.status(response.status).send('Error fetching the React app');
        }
    } catch (error) {
        console.error('Error fetching the React app:', error);
        res.status(500).send('Internal server error');
    }
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
