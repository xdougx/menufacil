var SiteController = (function () {
    var Site = function () {
        this.index = function (sammy) {
        	$.get("/site/main").then(function (data) {
        		$("#body").html(data);
        	});

        };

        this.sign_in = function () {
            $.get("/site/login").then(function (data) {
                $("#body").html(data);
            });
        };

        this.new_acount = function () {
        	$.get("/site/newAcount").then(function (data) {
        		$("#body").html(data);
        	});
        };

        this.prices = function () {
        	$.get("/site/prices").then(function (data) {
        		$("#body").html(data);
        	});
        };
    };
    return Site;
})();