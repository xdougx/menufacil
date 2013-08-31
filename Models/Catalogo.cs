using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Catalogo
    {
        public ObjectId id { get; set; }
        public Filial filial { get; set; }
        public string nome { get; set; }

    }
}