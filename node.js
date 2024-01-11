const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    // Handle form data received on the server side
    const { fullName, email, mobileNumber, emailSubject, message } = req.body;
    
    // Perform necessary operations with the form data
    // For example, save it to a database, send emails, etc.
    
    // Send a response back to the client
    res.status(200).json({ message: 'Form submitted successfully' });
});

// Start the server on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    // Handle the request for the root URL here
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));


const path = require('path');

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
