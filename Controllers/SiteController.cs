using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MenuFacil.Controllers
{
  public class SiteController : Controller
  {
    public ActionResult Index()
    {
        return View();
    }

    public ActionResult Login()
    {
        return View();
    }

    public ActionResult NewAcount()
    {
        return View();
    }

		[HttpPost]
		public ActionResult CreateAcount()
		{
			return View();
		}
				
		public ActionResult Main()
		{
			return View();
		}
		public ActionResult Prices()
		{
			return View();
		}

  }
}
