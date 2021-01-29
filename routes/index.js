const express = require('express')
const router = express.Router()
const { Todo } = require('../models')

router.get("/", (req, res) => {
  res.redirect("login")
});

router.get("/login", (req, res) => {
  res.render("login");
})

router.get("/logout", (req, res) => {
  res.redirect("/login");
})

router.get("/welcome", (req, res) => {
  res.render("welcome", { templateName: "大測試家" });
});

router.get("/to-do-list/list", async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      raw: true,
      attributes: {
        include: ['to_do_id'],
        exclude: ['id', 'updatedAt', 'createdAt', 'content']
      }
    })
    return res.json({ result: todos })
  } catch (error) {
    next(error)
  }
});

router.get("/to-do-list/page", (req, res) => {
  res.render("to-do-list", { templateName: "大測試家" });
});

router.get("/to-do-list/detail/create/page", (req, res) => {
  res.render("to-do-detail", { templateName: "大測試家" });
});

router.get("/to-do-list/detail/:to_do_id", (req, res) => {
  res.render("to-do-detail", { templateName: "大測試家" });
});

module.exports = router