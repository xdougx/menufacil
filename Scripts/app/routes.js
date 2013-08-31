// Starts the router
var router = Sammy('#body', function(){  
    this.get('/', function(){
        app = new IApp();
        app.addModules({"IndexSiteModule": new IndexSiteModule }).run(null);
    });
});
