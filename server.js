'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer')
var upload = multer({dest:'glitchuploads'})
// require and use "multer"...


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });
/**
{ fieldname: 'upfile',
  originalname: 'upfile.txt',
  encoding: '7bit',
  mimetype: 'text/plain',
  destination: 'glitchuploads',
  filename: 'b26d9a5d963b98a619f9a0dcbb4383d7',
  path: 'glitchuploads/b26d9a5d963b98a619f9a0dcbb4383d7',
  size: 27 }**/
app.post('/api/fileanalyse',upload.single('upfile'), function(req,res,next){
  var name = req.file.originalname
  var type = req.file.mimetype
  var size = req.file.size
  res.json({name: name, type: type, size: size})
  
})



app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
