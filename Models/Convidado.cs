using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Convidado
    {
        public ObjectId id { get; set; }
        public Usuario usuario { get; set; }
        public Pedido pedido { get; set; }
    }
}