const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
