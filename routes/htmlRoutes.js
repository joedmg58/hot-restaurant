// Dependencies
// =============================================================
var path = require("path");

modules.exports = function( exServer ) {

  exServer.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "/public/reserve.html"));
  });

  app.get("/tables", function(req, res){
    res.sendFile(path.join(_dirname, "/public/tables.html"));
  });

}

