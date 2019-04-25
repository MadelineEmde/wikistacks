const router = require("express").Router();
const layout = require("../views/layout");
const addPage = require("../views/addPage");
const Page = require("../models/index").Page;

router.get("/", (req, res, next) => {
  res.send(layout("test here"));
});

function titleToSlug(str) {
  let slug = str.replace(/\s+/g, "_").replace(/\W/g, "");
  console.log(slug);
}
titleToSlug("what the fuck is regExp");
router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const page = new Page({
    title,
    content
  });

  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
  // res.json(submitted);
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
