using EcommerceWebPortal.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EcommerceWebPortal.Service.Controllers;

namespace EcommerceWebPortal.Service
{
    public class ElectronicsController : ApiController
    {
        // GET: api/Electronics
        public IEnumerable<ElectronicItem> Get()
        {
            var elecItems = new List<ElectronicItem>(){
            new ElectronicItem(){Item="Televisions",Count=100},
            new ElectronicItem(){Item="Refrigerators",Count=100},
            new ElectronicItem(){Item="Ceiling Fans",Count=100},
            new ElectronicItem(){Item="Tubelights",Count=100},
            new ElectronicItem(){Item="CFLs",Count=100},
            new ElectronicItem(){Item="Bulbs",Count=100}

            };
            return elecItems;
        }

        // GET: api/Electronic/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Electronic
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Electronic/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Electronic/5
        public void Delete(int id)
        {
        }
    }
}
