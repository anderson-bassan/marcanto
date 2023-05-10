const express = require('express');

const app = express();
const port = process.env.PORT || 80;

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port);