var SiteController = (function () {
    var Site = function () {
        this.index = function (sammy) {
            new IApp = new IApp();

            $.get(sammy.path).then(function (data) {
               
            });
        };

        this.sign_in = function() {
        	$.get("/site/login").then(function (data) {
             $("body").html(data);  
          });
        }
    };
    return Site;
})();