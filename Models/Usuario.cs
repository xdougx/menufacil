using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using MenuFacil.Lib.Connection;
using MongoDB.Bson;
using Norm;

namespace MenuFacil.Models
{
    public class Usuario
    {
        [MongoIdentifier]
        public int UsuarioId { get; set;}
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        
        public int EstabelcimentoId { get; set; }

        public static void Create(Usuario usuario)
        {
            

            // collection.Save(usuario);
        }
    }
}

