using EcommerceWebPortal.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EcommerceWebPortal.Service.Controllers
{
    public class ComputersController : ApiController
    {
        // GET: api/Computers
        public IEnumerable<ComputerItem> Get()
        {
            var compItems = new List<ComputerItem>(){
            new ComputerItem(){Brand="LG",Price=12121.23M,Count=100},
            new ComputerItem(){Brand="Samsung",Price=12221.23M,Count=100},
            new ComputerItem(){Brand="Videocon",Price=12121.23M,Count=100},
            new ComputerItem(){Brand="Panasonic",Price=12121.23M,Count=100},
            new ComputerItem(){Brand="Sony",Price=22121.23M,Count=100},
            new ComputerItem(){Brand="Philips",Price=32121.23M,Count=100}

            };
            return compItems;
        }

        // GET: api/Computers/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Computers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Computers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Computers/5
        public void Delete(int id)
        {
        }
    }
}
