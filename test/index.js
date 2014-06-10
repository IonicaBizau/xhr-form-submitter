// Dependencies
var Statique = require("statique")
  , Http = require("http")
  , Debug = require("bug-killer")
  ;

// Statique config
Statique
    .server({root: __dirname + "/public"})
    .setRoutes({
        "/":       "/html/index.html"
      , "/form-submit": {
            method: "post"
          , handler: function (req, res, form) {

            }
        }
    })
  ;

// Create server
Http.createServer(Statique.serve).listen(8000);

// Output
console.log("Listening on 8000.");
