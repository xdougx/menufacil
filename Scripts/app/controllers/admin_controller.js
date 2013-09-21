var AdminController = (function () {
	var Admin = function () {
		this.dashboard = function (sammy) {
			$.get("/admin/dashboard").then(function (data) {
				$("#body").html(data);
			});

		};
	};
	return Admin;
})();