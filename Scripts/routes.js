// Routes for Landing Page
var landing = Sammy('body', function() {
  
  this.get('/#/sign_in', function(){
    if( BrowserDetect.browser == "Explorer" )
      window.location.href = "/#/browser_incompatible";    
    else
      window.location = "/sign_in"
  });  


  this.get('/#/browser_incompatible', function(){
    window.location.href = "/browser_incompatible"
  });
  
  // Create a new Trial Acount:
  // Retrieve from the form all params
  // Send a resquest and get the data from the answer
  this.post('/company/start/new/trial/', function(e){
    $.clear_tooltips();
    $(".iniciar_button").attr("disabled", "disabled");
    $(".iniciar_button").create_tooltip("Processando <img id='loader' src='/assets/loader3.gif' style='height: 18px; vertical-align: middle;'>", "black_tooltip_without_sign");
    $.ajax({
      
      url: this.path,
      data: this.params.toHash(),
      type: 'POST',
      dataType: 'json',
    
      success: function(data){
        if( _.has(data, "error") ) {
          $.clear_tooltips();
          var field = "[name='"+ data.error.field +"']";
          $(field).create_tooltip(data.error.message, "black_tooltip_without_sign");
            $(".iniciar_button")
              .val("Iniciar")
              .prop("disabled", null)
              .parent()
              .find("#loader").remove();
    
        }else if ( _.has(data, "success") ){
          window.location.href = "/welcome";
        }
      }
    });

  });
});

// Starts the Sign In Router
var signIn = Sammy('body', function() {
  var atempts = 0;

  this.get('/sign_in', function(){ });
  
  this.get('/sign_in/:reload', function(){
    if(this.params["reload"] == "true"){
      window.location.href = "/sign_in";
    }
  });

  // Authenticate the user
  this.post('/sign_in/authenticate', function(e){
    
    $.ajax({
    
      url: this.path,
      data: this.params.toHash(),
      type: 'POST',
      dataType: 'json',
    
      success: function(data){
        if( _.has(data, "error") ) {
          atempts = atempts + 1;
          var field = ".sign_in_form";  
          
          if(atempts > 3) { 
            data.error.message = "Vejo que não está conseguindo <br />realizar o login, <a href='/sign_in/#/retrieve_password'>esqueceu a Senha</a>? "
          }

          $(field).create_tooltip(data.error.message, "black_tooltip_without_sign");
          
    
        }else if ( _.has(data, "success") ){
          window.location.href = data.redirect;
        }
      }
    });

  });

  // loads the content for retrive a password
  this.get('/sign_in/#/retrieve_password', function(){
    $(".titulo").find("h2").text("Recuperar Senha");
    $("#form").load("/sign_in/forgoten_password");
    $(".sign_up_texto").remove();
  });

  // post the information with the e-mail to be verified and be sended
  this.post('/sign_in/#/new_password', function(){
    $.clear_tooltips();
    $("#mail").create_tooltip("Processando proposta, aguarde. <img id='loader' src='/assets/loader3.gif' style='height: 18px; vertical-align: middle;'>", "black_tooltip_without_sign");
    
    $.ajax({
    
      url: "/sign_in/reset/password",
      data: this.params.toHash(),
      type: 'POST',
      dataType: 'json',
    
      success: function(data){

        if( _.has(data, "error") ) {

          var field = "[name='"+ data.error.field +"']";
          $.clear_tooltips();
          $(field).create_tooltip(data.error.message, "black_tooltip_without_sign");
          
        } else if( _.has(data, "success") ) {
          $("#form").html(data.success);
        }
      }
    });
  });

  // registry a new password
  this.post('/sign_in/#/registry', function(){
    $("#pass").create_tooltip("Processando proposta, aguarde. <img id='loader' src='/assets/loader3.gif' style='height: 18px; vertical-align: middle;'>", "black_tooltip_without_sign");
    $.ajax({
    
      url: "/sign_in/registry/new/password",
      data: this.params.toHash(),
      type: 'put',
      dataType: 'json',
    
      success: function(data){
        $("#form").html(data.success);
      }
    });
  });

  // Shows the form to change the password
  this.get('/sign_in/change/forgoten/password/:code', function(){
    $("#code").val(this.params["code"]);
  });
});

// a plugin 
var CompanyHelpers = function(app){
  this.helpers({
    company_id: function(){
      var json = $.ajax({ url: "/company/acount.json", type: 'GET', dataType: 'json', async: false }).responseText;
      json = jQuery.parseJSON(json);
      return json.company_id;
    },
    create_temp_process: function(where, styles) {
      var default_styles = {"top":"90px","right":"425px"};
      
      if(!styles === undefined) {
        default_styles = $.extend(default_styles, styles);
      }
      $(where).html("");
      $(where).append($("<div>").attr("id", "temp_process"));
      $("#temp_process").create_tooltip("Processando <img id='loader' src='/assets/loader3.gif' style='height: 18px; vertical-align: middle;'>", "black_tooltip_without_sign");
      $(where).css("position", "relative");
      $(where + " .black_tooltip_without_sign").css(default_styles);
    }
  });
}


// Starts the company router
var company = Sammy('#body', function(){
  this.use(Sammy.GoogleAnalytics);
  this.use(CompanyHelpers);
  
  /*
   * Dashboard Routes
   */

  // show the dashboard page
  this.get('/company/#/dashboard', function(){
    new CompaniesController().dashboard(this); 
  });

  this.get('/company', function(){
    this.redirect('/company/#/dashboard');
  });

  this.get('/company/#/dashboard/:days', function(){
    new CompaniesController().dashboard_with_days(this); 
  });


  this.get('/company/#/me', function(){
    new CompaniesController().me(this);
  });

  this.get('/company/#/me/history', function(){
    new CompaniesController().me_history(this);
  });

  this.get('/company/#/packages', function(){
     new CompaniesController().packages(this);
  });

  this.get('/company/#/acount/details', function(){
    new CompaniesController().details(this);
  });
  
  this.get('/company/#/new_stuff', function(){
    new CompaniesController().new_stuff(this);
  });
  
  // show the acount page
  this.get('/company/#/acount/taxes', function(){
    new CompaniesController().taxes(this);
  });

  // show the acount page
  this.get('/company/#/acount/price_units', function(){
    new CompaniesController().price_units(this);
  });

  this.get('/company/#/home', function(){
    new CompaniesController().home(this);   
  });
 
  this.get('/company/collaborator/invite', function(){
    new CompaniesController().invite_collaborator(this);
  });

  this.get('/company/#/home/:days', function(){
    new CompaniesController().home_days(this);
  });

  this.put('/company', function(){
    new CompaniesController().update_company(this);
  });

  /*
   * Collaborator Routes
   */

  this.get('/company/:company_id/collaborator/:user_id/edit_user', function(){
    new CollaboratorsController().update_infos(this)
  });

  this.get('/company/:company_id/collaborator/:user_id/edit_pass', function(){
    new CollaboratorsController().update_pass(this)
  });

  this.get('/company/:company_id/collaborator/:user_id/configs', function(){
    new CollaboratorsController().update_configs(this)
  });

  this.post('/company/:company_id/collaborator/:user_id/update_pass', function(){
    new CollaboratorsController().save_pass(this)  
  });

  this.get('/company/:company_id/collaborator/:id/edit', function(){
    new CollaboratorsController().edit(this);
  });

  // update a collaborator
  this.put('/company/:company_id/collaborator/:id', function(){
    new CollaboratorsController().update(this);
  });

  // active the collaborator
  this.get('/company/:company_id/collaborator/:id/manual_active', function(){
    new CollaboratorsController().active(this);
  });

  // archive the collaborator
  this.get('/company/:company_id/collaborator/:id/archive', function(){
    new CollaboratorsController().archive(this);
  });

  /*
   * Subscriptions Routes
   */

  this.get('/company/#/acount_expired', function(){
    this.redirect('/company/expired');
  });

  this.get('/company/card_error', function(){
    this.redirect('/company/card_error');
  });


  this.get('/company/#/subscription', function(){
    new SubscriptionsController().subscription(this);
  });

  this.get('/company/#/subscribe_success', function(){
    new SubscriptionsController().subscribe_success(this);
  });

  this.get('/company/#/upgrade_success', function(){
    new SubscriptionsController().upgrade_success(this);
  });

  this.post('/company/:company_id/save_change_plan', function(){
    new SubscriptionsController().save_change_plan(this);
  });


  this.post('/company/:id/subscribe', function(){
    new SubscriptionsController().save_subscription(this);
  });
  
  this.post('/company/:id/update_card', function(){
    new SubscriptionsController().update_card(this);
  });
  

  /*
   * Taxes Routes
   */

  this.post('/company/:id/tax', function(){    
    new TaxesController().save(this)
  });

  this.put('/company/:company_id/tax/:id', function(){
    new TaxesController().update(this)
  });

  this.get("/company/:company_id/tax/:id/archive", function(){
    new TaxesController().archive(this)
  });

  this.get("/company/:company_id/tax/:id/unarchive", function(){
    new TaxesController().unarchive(this)
  });

  /*
   * Price Unit Routes
   */

  this.post('/company/:id/price_unit', function(){
    new PriceUnitsController().save(this);
  });

  this.put('/company/:company_id/price_unit/:id', function(){    
    new PriceUnitsController().update(this);
  });

  this.get("/company/:company_id/price_unit/:id/archive", function(){
    new PriceUnitsController().archive(this);
  });

  this.get("/company/:company_id/price_unit/:id/unarchive", function(){
    new PriceUnitsController().unarchive(this);
  });

  /*
   *  Price Routes
   */

  this.get('/company/#/prices/archived', function(){
    this.params["filter"] = "archived"
    new PricesController().index(this);
  });
  // list a filtered prices
  this.get('/company/#/prices/:filter', function(){
    new PricesController().index(this);
  });

  // list a filtered prices ordered prices
  this.get('/company/#/prices/:filter/:order', function(){
    this.create_temp_process("#body");
    var field = this.params["order"].split("_")[0];
    var order = this.params["order"].split("_")[1];
    $.get("/company/"+this.company_id()+"/price", {filter: this.params["filter"], field:field, order:order}, function(data){
      $("#body").html(data);
    }); 
  });

  // create a new price
  this.post('/company/:company_id/price', function(){
    new PricesController().save(this)
  });

  // update the selected price
  this.put('/company/:company_id/price/:id', function(){
    new PricesController().update(this)
  });

  /*
   *  Client Routes
   */

  // show de contacts list
  this.get('/company/#/contacts/', function(){
    this.redirect("/company/#/contacts/all");
  });
  
  // show de contacts list
  this.get('/company/#/contacts/:filter', function(){
    new ClientsController().index(this);
  });

  // loads the form to create a new client
  this.get('/company/#/new/client', function(){
    new ClientsController().new_client(this);
  });

  // create a new client
  this.post('/company/:id/client', function(){
    new ClientsController().save(this);
  });

  // show the client edit form
  this.get('/company/#/client/edit/:id', function(){
    new ClientsController().edit(this);
  });

  // update the cliente
  this.put('/company/:company_id/client/:id',function(){
     new ClientsController().update(this);
  });

  // show the client infos, contacs and proposes
  this.get('/company/#/client/view/:id', function(){
    new ClientsController().view(this);
  });

  // filter for estimates 
  this.get('/company/#/client/view/:id/:days', function(){
    new ClientsController().view_with_days(this);
  });

  this.get('/company/:company_id/client/:client_id/contacts/new', function() {
    new ClientsController().new_contact(this);
  });

  this.get('/company/:company_id/client/:client_id/contacts/:contact_id/edit', function(){
    new ClientsController().edit_contact(this);
  });

  // create a new contact
  this.post('/company/:company_id/client/:client_id/contacts', function(){
    new ClientsController().save_contact(this);
  });

  // update a contact
  this.put('/company/:company_id/client/:client_id/contacts/:id', function(){
    new ClientsController().update_contact(this);
  });

  // archive the contact
  this.get('/company/:company_id/client/:client_id/contacts/:id/archive', function(){
     new ClientsController().archive_contact(this);
  });

    // active the contact
  this.get('/company/:company_id/client/:client_id/contacts/:id/active', function(){
    new ClientsController().active_contact(this);
  });

  /*
   * Estimates Routes
   */
   
  this.get('/company/#/estimate/:id/show', function(){
    new EstimatesController().show(this);
   });
    
  this.get('/company/#/estimate/new', function(){
    new EstimatesController().new_estimate(this);
  });

  this.get('/company/#/estimate/new/:client_id', function(){
    new EstimatesController().new_with_client(this);  
  });

  this.get('/company/#/estimate/:id/values', function(){
    new EstimatesController().values(this);
  });

  this.get('/company/#/estimate/:id/finalization', function(){
    new EstimatesController().finalization(this);
  });
  
  this.get('/company/#/estimate/:id/edit', function(){
    new EstimatesController().edit(this);
  });

  this.put('/company/:company_id/estimate/:estimate_id/update_participation', function(){
    new EstimatesController().update_participation(this);
  });

  this.post('/company/:company_id/estimate/save_participation', function(){
    new EstimatesController().save_participation(this);
  });

  this.put('/company/:company_id/estimate/:id/save_finalization', function(){
    new EstimatesController().save_finalization(this);
  });

  this  .get('/company/:company_id/estimate/:id/active', function(){
    new EstimatesController().active(this);
  });

  this.get('/company/#/estimate/:filter', function(){
    new EstimatesController().index(this);
  });

  this.get("/company/:company_id/estimate/:estimate_id/contacts/:contact_id/view_estimate", function(){
    if( !$("#wrapper_head").length ) {
      window.location = this.path
    }
  });

});
