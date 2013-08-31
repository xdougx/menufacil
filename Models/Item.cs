using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Item
    {
        public ObjectId id { get; set; }
        public Preco preco { get; set; }
        public DateTime data_inclusao { get; set; }
        public int quantidade { get; set; }
        public Usuario usuario { get; set; }
        public Pedido pedido { get; set; }

    }
}