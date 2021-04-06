const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000)


//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'views/index.html'));
});


//Static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

//Listenign
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});