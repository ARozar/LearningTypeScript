var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);


app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/api/products/', function(req, res){
  res.send([
  {
    "code": "Eno-269",
    "name": "Enormo",
    "isActive": true,
    "id": 0
  },
  {
    "code": "Maz-617",
    "name": "Mazuda",
    "isActive": true,
    "id": 1
  },
  {
    "code": "Mar-365",
    "name": "Marqet",
    "isActive": true,
    "id": 2
  },
  {
    "code": "Sup-967",
    "name": "Supremia",
    "isActive": true,
    "id": 3
  },
  {
    "code": "Del-463",
    "name": "Delphide",
    "isActive": true,
    "id": 4
  },
  {
    "code": "Ski-948",
    "name": "Skinserve",
    "isActive": true,
    "id": 5
  },
  {
    "code": "Gon-729",
    "name": "Gonkle",
    "isActive": true,
    "id": 6
  },
  {
    "code": "Oze-994",
    "name": "Ozean",
    "isActive": true,
    "id": 7
  },
  {
    "code": "Int-400",
    "name": "Intergeek",
    "isActive": true,
    "id": 8
  },
  {
    "code": "Mag-839",
    "name": "Magneato",
    "isActive": true,
    "id": 9
  }
]);
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Andrew's app listening on", addr.address + ":" + addr.port);
});
