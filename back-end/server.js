// Backend server (server.js)
const express = require('express');
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());

// Define a GET endpoint on a specific port (e.g., 5000)
app.get("/", (req, res) => {
    // Simulated data for demonstration
    const users = ["userOne", "userTwo", "userThree"];
    
    // Send a JSON response with users data
    res.json({ message: "Hello from the backend!", users });
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
