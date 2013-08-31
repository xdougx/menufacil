using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Estabelecimento
    {
        public ObjectId id { get; set; }
        public string razao_social { get; set; }
        public string nome_fantasia { get; set; }
        public PlanoPagamento planoPagamento { get; set;}
        public string cnpj { get; set; }
        public string foto { get; set; }
        public string status { get; set; }
        public DateTime data_criacao { get; set;}
        public DateTime data_atualiazacao { get; set;}
        public Usuario usuario { get; set; }


    }
}