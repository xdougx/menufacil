﻿using MenuFacil.Lib.Connection;
using MenuFacil.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace MenuFacil.Controllers
{
    public class UsuariosController : Controller
    {
        //
        // GET: /Usuarios/

        public ActionResult Index()
        {

            if (Request["format"] == "json")
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                string json = js.Serialize(new { error = true });
                return Content(json.ToString());
                
            }
            else
            {
                return View();
            }
           
        }

        public ActionResult Novo()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Salvar(Usuario usuario) 
        {
            using (var session = new MongoSession()) {
                session.Add(usuario);
            }
            return View(usuario);
        }



    }
}
