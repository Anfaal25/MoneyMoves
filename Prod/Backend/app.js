const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5173;

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Generalized endpoint to handle various financial product requests
app.get('/tab/:productId', (req, res) => {
    const productId = req.params.productId.replace(/\s+/g, ''); // Remove spaces to match JSON keys
    fs.readFile(path.join(__dirname, 'bankData.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading bank data' });
            return;
        }
        try {
            const bankData = JSON.parse(data);
            const productData = bankData[productId];
            if (productData) {
                res.json(productData);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error parsing bank data' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
