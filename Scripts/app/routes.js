// Starts the router
var router = Sammy('body', function(){  
    this.get('/', function(){

    });

    this.get('/#/sign_in', function () {
      new SiteController().sign_in(this);
    });
});
