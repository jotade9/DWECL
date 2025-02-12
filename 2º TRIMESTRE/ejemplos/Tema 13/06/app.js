import express from 'express';
var app = express();
app.get('/', function (req, res) {
  res.send('Hola mundo!');
});
app.listen(3000, function () {
  console.log('Ejemplo hola mundo escuchando en el puerto 3000!');
});
