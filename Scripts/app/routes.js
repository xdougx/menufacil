// Starts the router
var router = Sammy('body', function () {
	this.get('/', function () {
		new SiteController().index(this);
	});

	this.get('/#/sign_in', function () {
		new SiteController().sign_in(this);
	});

	this.get('/#/new_acount', function () {
		new SiteController().new_acount(this);
	});

	this.get('/#/prices', function () {
		new SiteController().prices(this);
	});
});
