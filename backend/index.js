const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path'); 

app.use(cors());  

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'product.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const sampledata = JSON.parse(data);
            res.json(sampledata);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).send('Error parsing JSON');
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
