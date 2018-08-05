var table = require('../data/table.js');
var waitlist = require('../data/waitlist.js');

module.exports = function( exServer ) {

    exServer.get("/api/tables", function(req, res){
        res.json( table );
    });

    exServer.get("/api/waitlist", function(req, res){
        res.json( waitlist );
    });

    exServer.post( '/api/tables', function( req, res ) {
        
        if ( table.length < 5 ) {
            table.push( req.body );
            res.json( true );
        } else {
            waitlist.push( req.body );
            res.json( false );
        }

    } );

}