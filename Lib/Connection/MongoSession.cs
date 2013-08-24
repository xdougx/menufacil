using Norm;
using Norm.Collections;
using Norm.Linq;
using Norm.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MenuFacil.Lib.Connection
{
    public class MongoSession : ISession
    {
        private Mongo _provider;
        public MongoDatabase DB { get { return (MongoDatabase)this._provider.Database; } }

        public MongoSession()
        {
            //this looks for a connection string in your Web.config
            _provider = (Mongo) Mongo.Create("menu_facil");
        }

        public void CommitChanges()
        {
            //mongo isn't transactional in this way
        }

        public void Delete<T>(System.Linq.Expressions.Expression<Func<T, bool>> expression) where T : class, new()
        {
            var items = All<T>().Where(expression);
            foreach (T item in items)
            {
                Delete(item);
            }
        }

        public void Delete<T>(T item) where T : class, new()
        {
            DB.GetCollection<T>().Delete(item);
        }

        public void DeleteAll<T>() where T : class, new()
        {
            DB.DropCollection(typeof(T).Name);
        }

        public T Single<T>(System.Linq.Expressions.Expression<Func<T, bool>> expression) where T : class, new()
        {
            return All<T>().Where(expression).SingleOrDefault();
        }

        public IQueryable<T> All<T>() where T : class, new()
        {
            return _provider.GetCollection<T>().AsQueryable();
        }

        public void Add<T>(T item) where T : class, new()
        {
            DB.GetCollection<T>().Insert(item);
        }

        public void Add<T>(IEnumerable<T> items) where T : class, new()
        {
            foreach (T item in items)
            {
                Add(item);
            }
        }

        public void Update<T>(T item) where T : class, new()
        {
            DB.GetCollection<T>().UpdateOne(item, item);
        }

        //Helper for using map reduce in mongo
        public T MapReduce<T>(string map, string reduce)
        {
            T result = default(T);
            MapReduce mr = DB.CreateMapReduce();

            MapReduceResponse response =
                mr.Execute(new MapReduceOptions(typeof(T).Name)
                {
                    Map = map,
                    Reduce = reduce
                });
            IMongoCollection<MapReduceResult<T>> coll = response.GetCollection<MapReduceResult<T>>();
            MapReduceResult<T> r = coll.Find().FirstOrDefault();
            result = r.Value;

            return result;
        }

        public void Dispose()
        {
            _provider.Dispose();
        }
    }
}