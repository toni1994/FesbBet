using System.Web;
using System.Web.Optimization;

namespace FESBet.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                         "~/Scripts/Vendor/angular.min.js",
                         "~/Scripts/Vendor/angular-ui-router.min.js",
                         "~/Scripts/Vendor/underscore.min.js",
                         "~/Scripts/Vendor/angular-messages.min.js",

                         "~/Scripts/App/app.module.js",
                         "~/Scripts/App/app.config.js",

                         "~/Scripts/App/Home/home.controller.js",
                          "~/Scripts/App/Home/home.state.js"

                         //"~/Scripts/App/Registration/registration.controller.js",
                         //"~/Scripts/App/Registration/registration.state.js",

                         //"~/Scripts/App/Sign-In/sign-in.controller.js",
                         //"~/Scripts/App/Sign-In/sign-in.state.js",

                         //"~/Scripts/App/Service/mainService.js"
                         
                         ));
        }
    }
}
