const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/html/about.html'));
});

router.get('/portfolio',function(req,res){
  res.sendFile(path.join(__dirname+'/html/portfolio.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(__dirname));

app.use('/', router);
app.listen(process.env.port || port);

console.log('Running at Port ' + port);
