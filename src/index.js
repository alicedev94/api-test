const express = require('express');
const cors = require('express');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res)=> {
    res.send('Hello this is node..!');
})

app.listen(port, ()=> {
    console.log('running por in: ' + port);
});

// add https too