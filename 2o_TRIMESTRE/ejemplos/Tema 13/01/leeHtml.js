// leeHtml.js
import * as fs from 'fs';

fs.unlink('prueba1.txt', function (err) {
    if (err) throw err;
    console.log('Archivo borrado!');
 });
  