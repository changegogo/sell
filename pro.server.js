var express = require('express');

var config = require('./config/index');
var port = process.env.PORT || config.build.port;

var app = express();
var router = express.Router();

router.get('/', function(req, res, next){
	req.url = '/index.html';
	next();
});

var apiData = require('./data.json');
var seller = apiData.seller;
var goods = apiData.goods;
var ratings = apiData.ratings;

var router = express.Router();
router.get('/seller', function(req, res){
	res.json({
		errno: 0,
		data: seller
	});
});
router.get('/goods', function(req, res){
	res.json({
		errno: 0,
		data: goods
	});
});
router.get('/ratings', function(req, res){
	res.json({
		errno: 0,
		data: ratings
	});
});

app.use('/api',router);

app.use(express.static('./dist'));

var server = app.listen(port);



