require("dotenv").config();

const server = require("./api/server.js");

// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
