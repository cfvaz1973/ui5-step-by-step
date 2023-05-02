import { createServer } from "myProxy";

// Listen on a specific IP Address
var host = "localhost";

// Listen on a specific port, adjust if necessary
var port = 8081;

createServer({
  // Set parameters for:
  // allowed origins,
  // required headers ['origin', 'x-requested-with'],
  // headers to be removed ['cookie', 'cookie2']
}).listen(port, host, function () {
  console.log("Running myProxy on " + host + ":" + port);
});
