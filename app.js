const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(80);