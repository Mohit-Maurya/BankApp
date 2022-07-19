const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views')); //this expects the templates to live in the views

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static("public"));

// app.get('/', (req, res) => {
//     res.render('pages/index', { pageTitle: 'Welcome!'}); //passing the variable
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/index.html"));
});

app.listen(port, () => {
  console.log(`Our express server is listening to the port: ${port}!`);
});
