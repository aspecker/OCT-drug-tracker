// CORE API Query
// https://api.fda.gov/drug/label.json?search=openfda.product_type:otc+AND+
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

	app.get("/api/search", (req, res) => {

		db.Med.findAll({}).then(results => res.json(results));

	});
	//
	app.put("/api/retire", function(req, res) {
		console.log(req.body);
		db.Med.update(req.body, {
				where: {
					userId: req.user.id,
					fdaMedId: req.body.medId
				}
			}).then(response => res.send(response));
	});
	//SAVE MEDICATIONS
	app.post("/api/add", (req, res) => {
		db.Med.create({
			userId: req.user.id,
			brandName: req.body.brand_name.toUpperCase(),
			genericName: req.body.generic_name.toUpperCase(),
			fdaMedId: req.body.id
		}).then(() => console.log("WE DID IT"))
	});

	//PASSPORT LOGIN
	app.post("/api/login", passport.authenticate("local"), (req, res) => {
		res.redirect("/search");
	});

	//PASSPORT SIGNUP
	app.post("/api/signup", function(req, res) {
		db.User.create({
			email: req.body.email,
			password: req.body.password
		}).then(function() {
			res.redirect(307, "/api/login");
		}).catch(function(err) {
			console.log(err);
			res.json(err);
		});
	});

	app.get("/logout", function(req, res) {
		req.logout();
		res.redirect("/");
	});

	//PASSPORT CHECKS TO MAKE SURE USER IS VALID
	app.get("/api/user_data", function(req, res) {
		if (!req.user) {
			res.json({});
		} else {
			res.json({
				email: req.user.email,
				id: req.user.id
			});
		}
	});

};
