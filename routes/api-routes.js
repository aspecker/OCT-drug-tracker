// CORE API Query
// https://api.fda.gov/drug/label.json?search=openfda.product_type:otc+AND+
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
	
	app.post("/api/search", (req, res) => {

		db.Med.findAll({}).then(results => {
			res.json(results);
		})
	});
	app.get('/search/:searchTerm?', (req, res)=>{
		let searchTerm = req.params.searchTerm;
		if (searchTerm) {
			axios.get(`https://api.fda.gov/drug/label.json?search=openfda.product_type:otc+AND+brand_name:${searchTerm}&limit=5`).then(function (data) {
				let obj = data.data.results;
				// console.log(req);
				let parsedData = [];
				Object.keys(obj).forEach(function (key) {
					let brandName = obj[key].openfda.brand_name[0];
					let genericName = obj[key].openfda.generic_name[0];
					let route = obj[key].openfda.route[0];
					let whenUsing = obj[key].when_using[0];
					let purpose = obj[key].purpose[0];
					let doseAdmin = obj[key].dosage_and_administration[0];
					let activeIngredient = obj[key].active_ingredient[0];
					let question = obj[key].questions[0];
					parsedData.push([brandName, genericName, route, whenUsing, purpose, doseAdmin, activeIngredient, question]);
				});
				console.log(parsedData);
				res.render("../views/search.handlebars", {parsedData: parsedData});
			});
		}
		else {
			res.render("search")
		}
	});
	app.post("/fdasearch", (req, res) => {
		let searchTerm = req.body.searchTerm;
		res.redirect(`/search/${searchTerm}`);
	})

	app.get("/api/meds", (req, res) => {

		db.Med.findAll({where: {
			userId: req.user.id
		}}).then(results => {
				res.json(results);
		})
	});
	app.post("/api/add", (req, res) => {
		// const drugInfo = req.body.results[0]
		db.Med.create({
			userId: req.user.body,
							//db.User.id
			fdaMedId: "ksnadkjnaskjdnaksj"
							//drugInfo.openfda.product_ndc[0]
		}).then(() => { 
			//Refresh somehow
		})
	});
	app.post("/api/user/", (req, res) => {
		db.Med.findAll({
			where: {
				userId: 1
				 				//db.User.id - dtnamic value
			}
		}).then(userMeds => res.json(userMeds))
	});
	app.post("/api/login", passport.authenticate("local"), (req, res) => {
		res.redirect("/meds");
	});

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
