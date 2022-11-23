// const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hello world desde Express'))

// const server = http.createServer((req,res)=>{
//     res.end('Servidor corriendo')
// })

app.listen(3000);
console.log('server on port 3000');