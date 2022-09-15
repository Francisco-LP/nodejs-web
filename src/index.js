
/*llama al modulo express */
/*en versiones anteriores se ponia: const express = require('express') */
import express from "express";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

import router from './routes/index.js'


/*metodo express dentro de una constante */
const app = express();

/*da de forma dinamica la ruta absoluta de donde estan la carpeta de las vistas, es decir donde estan las paguinas html*/
const __dirname = dirname(fileURLToPath(import.meta.url));    /* pasa la direccion del directorio a la constante */
app.set('views', join(__dirname, 'views')); /* le pasa la direccion a views, join concatena los directorios*/



app.set('view engine', 'ejs'); /*para poder empezar a utilizar ejs*/

/*se da la orden de que pueda acceder a router que son las paguinas con el html */
app.use(router);

/*se le da la ruta de donde esta el archivo css */
app.use(express.static(join(__dirname, 'public')));


/*para ver si el servidor esta escuchando */
app.listen(3000);
console.log('listening on port 3000', 3000);

