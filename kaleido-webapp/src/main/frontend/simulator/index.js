/**
 *@Author: chad.ding
 *@Copyright: 2008-2018 CHAD
 *@Date: 2017-06-24 22:56:02
 */

var express = require('express');
var fs = require('fs');
var app = express();

app.get('/kaleido-webapp/api/user/login', function(req, res) {
	console.info(req);
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
	var data = {
		code: 200,
		msg: 'success',
		data: '20170624'
	};

    res.end(JSON.stringify(data));
});

app.get('/kaleido-webapp/api/user/get', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

    fs.readFile(__dirname + '/data/userInfo.json', { encoding: 'utf-8' }, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.end(data);
    });
});

app.listen(8080);
console.log('Server running on 8080');