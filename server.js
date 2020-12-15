const app = require("./app");

// server

const port = 3000;
app.listen(port, () => {
  console.log("Running on port" + " " + port);
});

module.exports = app;