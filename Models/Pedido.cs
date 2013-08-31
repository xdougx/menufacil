using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MenuFacil.Models
{
    class Pedido
    {
        public ObjectId id { get; set; }
        public DateTime data_pedido { get; set; } 
        public Mesa mesa{ get; set; }
        public Cliente cliente{ get; set; }
    }
}
