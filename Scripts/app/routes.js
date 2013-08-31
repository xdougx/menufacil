// Starts the router
var router = Sammy('#body', function(){  
  /*
   * Site
   */

  // show the dashboard page
  this.get('/usuarios/index', function(){
    new SiteControllerController().index(this); 
  });
});
