//requerimos express y lo ejecutamos para poder usar los metodos 
let express = require('express');
let app = express();

//Modulo nativo para manejar las rutas de los archivos 
let path = require('path');

/* let publicFolderPath = path.resolve(__dirname, "./public"); */
app.use(express.static("public"));


// Ponemos a escuchar al servidor en el puerto 3030
app.listen(3030, () => console.log("esta corriendo el puerto: http://localhost:3030/"));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});