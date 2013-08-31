using MongoDB.Driver;
using Norm;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using MenuFacil.Lib.Connection;

namespace MenuFacil.Models
{
    public class Usuario
    {
        public ObjectId id { get; set;}
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
<<<<<<< HEAD
        
        public Estabelecimento estabelecimento { get; set; }
=======
        public Estabelecimento Estabelecimento { get; set; }

>>>>>>> criado respond_to para o controlle

    }
}

