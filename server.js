var   express           = require('express')
	, path           	= require('path')
	, app               = express()
	, staticPath        = path.resolve(__dirname, 'app')
	;

app.use(express.static(staticPath));

app.listen(1234, function () {
	console.log('server was started on 1234');
});
