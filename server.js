var bodyParser = require( 'body-parser' );
var express = require( 'express' );

var exServer = express();

// Sets up the Express Server to handle data parsing
exServer.use( bodyParser.urlencoded( { extended: true } ) );
exServer.use( bodyParser.json() );

// set initial port
var PORT = process.env.PORT || 3000;

//import modules for routes ( api and html files )
require( './routes/apiRoutes.js' )( exServer );
require( './routes/htmlRoutes.js' )( exServer );


//---------- Server start listening ----------
exServer.listen( PORT, function() {
    console.log( 'App listening on PORT ' + PORT );
});

  