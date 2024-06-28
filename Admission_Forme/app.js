const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/submit', (req, res) => {
    const { phone_number, name, course, age } = req.body;
    const data = `Phone Number: ${phone_number}\nName: ${name}\nCourse: ${course}\nAge: ${age}\n----------\n`;
    
    fs.appendFile('datas.txt', data, (err) => {
        if (err) throw err;
        res.send(`Thank you ${name}, your submission has been received!`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
