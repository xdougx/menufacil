using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Filial
    {
        public ObjectId id { get; set; }
        public Estabelecimento estabelecimento { get; set; }
        public string apelido { get; set; }
        public string razao_social { get; set; }
        public string cnpj { get; set; }
				public string foto { get; set; }
				public string status { get; set; }
    }
} 