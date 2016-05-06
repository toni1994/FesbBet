using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using FESBet.Data;
using FESBet.Data.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Mvc;

namespace FESBet.Web.App_Start
{
    public  class IoCConfig
    {
        public static void RegisterDependencies()
        {
            var builder = new ContainerBuilder();
            var dataAccess = AppDomain.CurrentDomain.GetAssemblies();

            // Register your Web API controllers.
            builder.RegisterApiControllers(dataAccess);

            #region Setup a common pattern
            //// placed here before RegisterControllers as last one wins
            builder.RegisterAssemblyTypes(dataAccess)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterAssemblyTypes(dataAccess)
                .Where(t => t.Name.EndsWith("Service"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterAssemblyTypes(dataAccess)
                .Where(t => t.Name.EndsWith("Command"))
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterAssemblyTypes(dataAccess)
                .Where(t => t.Name.EndsWith("Factory"))
                .AsImplementedInterfaces()
                .InstancePerRequest();
            #endregion


            RegisterDatabaseContext(builder);

            #region Register all controllers for the assembly
            // Note that ASP.NET MVC requests controllers by their concrete types, 
            // so registering them As<IController>() is incorrect. 
            // Also, if you register controllers manually and choose to specify 
            // lifetimes, you must register them as InstancePerDependency() or 
            // InstancePerHttpRequest() - ASP.NET MVC will throw an exception if 
            // you try to reuse a controller instance for multiple requests. 

            builder.RegisterControllers(dataAccess).InstancePerRequest();
            #endregion

            #region Register modules
            builder.RegisterAssemblyModules(dataAccess);
            #endregion

            #region Inject HTTP Abstractions
            /*
             The MVC Integration includes an Autofac module that will add HTTP request 
             lifetime scoped registrations for the HTTP abstraction classes. The 
             following abstract classes are included: 
            -- HttpContextBase 
            -- HttpRequestBase 
            -- HttpResponseBase 
            -- HttpServerUtilityBase 
            -- HttpSessionStateBase 
            -- HttpApplicationStateBase 
            -- HttpBrowserCapabilitiesBase 
            -- HttpCachePolicyBase 
            -- VirtualPathProvider 

            To use these abstractions add the AutofacWebTypesModule to the container 
            using the standard RegisterModule method. 
            */
            builder.RegisterModule<AutofacWebTypesModule>();
            #endregion

            #region Set the MVC dependency resolver to use Autofac
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            #endregion
        }

        private static void RegisterDatabaseContext(ContainerBuilder builder)
        {
            var databaseInitializer =
                ConfigurationManager.AppSettings["EnviromentName"] == "Local"
                    ? (IDatabaseInitializer<FESBetContext>)new DevelopmentDatabaseInitializer()
                    : (IDatabaseInitializer<FESBetContext>)new CreateDatabaseIfNotExists<FESBetContext>();
            var connectionString = ConfigurationManager.ConnectionStrings["FESBetCS"].ConnectionString;
            builder.RegisterType<FESBetContext>()
                .WithParameters(new List<Parameter> {
                    new NamedParameter("FESBetConnectionString", connectionString),
                    new NamedParameter("databaseInitializer", databaseInitializer)
                }).As<IFESBetContext>();
            builder.Register<FESBetContext>((x) => new FESBetContext(connectionString, databaseInitializer));
        }
    }
}
