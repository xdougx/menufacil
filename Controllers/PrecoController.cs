using MenuFacil.Lib.Connection;
using MenuFacil.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MenuFacil.Controllers
{
    public class PrecoController : Controller
    {
       

        public ActionResult Novo()
        {
            return View();
        }

				[HttpPost]
				public ActionResult Salvar(Preco preco)
				{
					using (var session = new MongoSession())
					{
						session.Add(preco);
					}
					return View(preco);
				}

    }
}
