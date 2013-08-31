using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Endereco
    {
        public ObjectId id { get; set; }
        public string type { get; set; }
        public int type_id { get; set; }
        public string endereco { get; set; }
        public  string complemento { get; set; }
        public int cep{ get; set; }
        public string cidade { get; set; }
        public string estado { get; set; }
        public int numero { get; set; }
        public int codigo_cidade { get; set; }
        public int codigo_pais { get; set; }
    }
}