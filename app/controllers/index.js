'use strict';

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};

exports.login = function(req, res){

	res.render('login', {
		
	});
}
