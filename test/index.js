// Dependencies
var Statique = require("statique")
  , Http = require("http")
  , Debug = require("bug-killer")
  , QueryString = require("querystring")
  ;

// Statique config
Statique
    .server({root: __dirname + "/public"})
    .setRoutes({
        "/":       "/html/index.html"
      , "/form-submit": {
            post: function (req, res, form) {
                form.on("done", function (form) {
                    var data = QueryString.parse(form.data);
                    if (!data.name) {
                        return Statique.sendRes(res, 400, "text", "Provide a name in post data.");
                    }
                    setTimeout(function () {
                        res.end("Your name is: " + data.name);
                    }, 1500);
                });
            }
        }
    })
  ;

// Create server
Http.createServer(Statique.serve).listen(8000);

// Output
console.log("Listening on 8000.");
