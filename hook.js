// Listen on port 9001 YEAH4	
var gith = require('gith').create( 9001 );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

gith({
    repo: 'jvlucic/testHook'
}).on( 'all', function( payload ) {
    if( payload.branch === 'develop' )
    {
	console.log('received something! :D');
            // Exec a shell script
            execFile('./hook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            });
    }
});
