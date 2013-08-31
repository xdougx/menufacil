using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MenuFacil.Models
{
    class PlanoPagamento
    {
        public ObjectId id { get; set; }
        public string nome { get; set; }
        public int qtd_filiais { get; set; }
        public int qtd_produtos { get; set; }

    }
}
