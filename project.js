const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});
app.get('/details.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'details.html'));

});
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));

});
app.get('/weight.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'weight.html'));
});
app.get('/payment.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'payment.html'));

});
app.get('/finalpage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'finalpage.html'));
});

// Route to serve the customer care page
app.get('/payment_method.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'payment_method.html'));
});
app.get('/payment_kg.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'payment_kg.html'));
});
app.get('/weight.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'weight.html'));
});
app.get('/waste.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'waste.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});