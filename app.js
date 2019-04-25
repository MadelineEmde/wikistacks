const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models"); // uses destructuring, for each variable,
//we could have also done const models and then models.db, etc.

const app = express();

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "./stylesheets/style.css"));
app.use(express.urlencoded({ extended: false }));

app.use("/wiki", require("./routes/wiki"));
app.use("/user", require("./routes/user"));

app.get("/", (req, res, next) => {
  try {
    res.redirect("/wiki");
  } catch (err) {
    next(err);
  }
});

const initialize = async () => {
  await User.sync({ force: true });
  await Page.sync({ force: true });
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log("App is listening in port: ", PORT);
  });
};

initialize();
