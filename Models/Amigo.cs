using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Amigo
    {
        public ObjectId id { get; set; }
        public Cliente cliente { get; set; }
    }
}