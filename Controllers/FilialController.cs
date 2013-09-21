using MenuFacil.Lib.Connection;
using MenuFacil.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MenuFacil.Controllers
{
	public class FilialController : Controller
	{

		public ActionResult Index()
		{
			using (var session = new MongoSession())
			{
				ViewBag.filiais = session.All<Filial>();
			}
			
			return View();
		}
		public ActionResult Novo()
		{
			return View();
		}

		public ActionResult Salvar(Filial filial)
		{
			using (var session = new MongoSession())
			{
				session.Add(filial);
			}
			return View(filial);
		}

	}
}
