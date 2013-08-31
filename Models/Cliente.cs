using Norm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MenuFacil.Models
{
    public class Cliente
    {
        public ObjectId id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string codigo { get; set; }
        public string avatar { get; set; }

        
    }
}
