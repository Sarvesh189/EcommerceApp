using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.IO;
using System.Linq;
using System.Web.Http;


[assembly: OwinStartup(typeof(EcommerceWebPortal.Service.Startup))]

namespace EcommerceWebPortal.Service
{
    public class Startup
    {
       
        public void Configuration(IAppBuilder app)
        {
           

            var config = new HttpConfiguration();
           
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute("default", "api/{controller}/{id}", defaults: new { id = RouteParameter.Optional });

            app.UseWebApi(config);
            


            //app.UseCookieAuthentication(new CookieAuthenticationOptions());
            //app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            //app.UseOAuthBearerTokens(OAuthOptions);
            //Configuration(app);
            #region
            //app.Run(context =>
            //{
            //    string t = DateTime.Now.Millisecond.ToString();
            //    return context.Response.WriteAsync(t + " Production OWIN App");
            //});

            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            //app.Use((context, next) => {
            //    TextWriter output = context.Get<TextWriter>("host.TraceOutput");
            //    return next().ContinueWith(result =>
            //    {
            //        output.WriteLine("Scheme {0} : Method {1} : Path {2} : MS {3}",
            //        context.Request.Scheme, context.Request.Method, context.Request.Path, getTime());
            //    });

            //    app.Run(()=>
            //    {
            //        await context.Response.WriteAsync(getTime() + " My First OWIN App");
            //    });
            //});
            #endregion
        }
            
        
        
    }
}
