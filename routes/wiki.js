const router = require("express").Router();
const layout = require("../views/layout");
const addPage = require("../views/addPage");
const Page = require("../models/index").Page;

router.get("/", (req, res, next) => {
  res.send(layout("test here"));
});

router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const page = new Page({
    title,
    content
  });
  console.log(page);

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

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.json(page);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
