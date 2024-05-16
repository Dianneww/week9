const express = require('express');
const { request } = require('http');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) =>{

response.sendFile(__dirname + '/index.html');

});

app.get('/about', (request, response)=>{
    response.send('hello, im dianne');
});

app.listen(3000, () =>{
    console.log('is running');

});
