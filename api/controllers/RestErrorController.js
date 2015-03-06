/**
 * ResterrorController
 *
 * @description :: Server-side logic for managing resterrors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'isWorking': function(req, res) {
		res.json({ message: "This route is working" });
	},


  throws: function (req,res) {
    // Acts oddly in HTTP mode with req.xhr, does not return JSON
    throw new Error('Application error thrown');
  }
};

