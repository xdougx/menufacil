using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Tag
    {
        public ObjectId id { get; set; }
        public string type { get; set; }
        public int type_id { get; set; }
        public string nome { get; set; }


    }
}