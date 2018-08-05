// Dependencies
// =============================================================
var path = require("path");

module.exports = function( exServer ) {

  exServer.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  exServer.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

  //default route ( default page ), note the difference, instead of using get method we are using use method w/o path
  //this has to be at the end of all path check
  exServer.use( function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}

