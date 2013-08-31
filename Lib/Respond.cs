using MenuFacil.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace MenuFacil.Lib
{
    public class Respond
    {
        public static ActionResult To(string format, object obj)
        {
            if (format == "json")
            {
                return json(obj);
            }
            else
            {
                return new ViewResult();
            }
        }

        public static ContentResult json(object obj) 
        {
            ContentResult result = new ContentResult();
            result.Content = Serialize(obj);
            return result;
        }

        private static string Serialize(object obj)
        {
            return new JavaScriptSerializer().Serialize(obj);
        }

    }
}