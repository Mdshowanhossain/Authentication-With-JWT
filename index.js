const express = require('express');
const app = express();
app.use(express.json());

// const userHandler = require('./routeHandler/userHandler');

const userHandler = require('./routeHandler/userHandler');


app.get('/', (req, res) => {
    res.status(200).send('Your server is running successfully')
})

app.post('/user', userHandler)




app.listen(4000, () => {
    console.log(`server is running now`);
})