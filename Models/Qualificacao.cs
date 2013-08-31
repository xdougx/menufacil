using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Models
{
    public class Qualificacao
    {
        public ObjectId id { get; set; }
        public string type { get; set; }
        public int type_id { get; set; }
        public int nota { get; set; }
        public string comentario { get; set; }
        public DateTime data_criacao { get; set; }

        
    }
}