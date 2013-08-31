using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Preco
    {
        public ObjectId id { get; set; }
        public Catalogo catalogo { get; set; }
        public string nome { get; set; }
        public string descricao { get; set; }
        public float valor { get; set; }
    }
}