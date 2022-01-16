const express = require("express");
const app = express();
// app.all("/", (req, res) => {
//   console.log("Just got a request in app.all !");
//   res.send("Yo!");
// });

// get route
app.get("/:abc", (req, res) => {
  console.log("Just got a GET request!");
  res.send(req.path + new Date());
});

app.listen(process.env.PORT || 3001);
