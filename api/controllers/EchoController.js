/**
 * EchoController
 *
 * @description :: Server-side logic for managing echoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'index': function(req, res) {
		res.json(req.body);
	}
};

