const express = require('express')
const router = express.Router()
const { Todo } = require('../models')

router.get("/", (req, res) => {
  res.redirect("/welcome")
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
        include: [['id', 'to_do_id']],
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

router.get("/to-do-list/detail/:to_do_id", async (req, res) => {
  try {
    const id = Number(req.params.to_do_id)
    if (!id) return res.redirect('back')
    const todo = await Todo.findByPk(id, {
      raw: true, attributes: {
        include: [['id', 'to_do_id'], ['updatedAt', 'modified_time']],
        exclude: ['id', 'updatedAt', 'createdAt']
      }
    })
    const timeStr = todo.reserved_time.toISOString()
    todo.reserved_time = timeStr.slice(0, 10) + ' ' + timeStr.slice(11, 16)
    console.log('reserved_time', todo.reserved_time)
    return res.render("to-do-detail", { templateName: "大測試家", ...todo });
  } catch (error) {
    console.log(error)
    return res.redirect('back')
  }
});

router.put("/to-do-list/detail/:to_do_id", async (req, res, next) => {
  try {
    //mode check
    const id = Number(req.params.to_do_id)
    const mode = req.query.mode
    if (!["create", "edit"].includes(mode)) return res.status(404).json({ status: "error", message: "Invalid mode." })
    if (mode === 'edit' && !id) return res.status(404).json({ status: "error", message: "Invalid todo id." })

    //Input check
    const { to_do_id, subject, reserved_time, brief, level, author } = req.body
    if (mode === 'edit' && id !== Number(to_do_id)) return res.status(404).json({ status: "error", message: "Inconsistent todo id in url and form data." })
    if (!to_do_id || !to_do_id.length || !subject || !subject.length || !brief || !brief.length || !level || !author || !author.length) return res.status(404).json({ status: "error", message: "Some fields are missing" })

    //create / edit
    //create
    if (mode === 'create') {
      await Todo.create({ subject, reserved_time, brief, level, author })
      return res.json({ status: "success", message: "ok." })
    }
    //edit
    const todo = await Todo.findByPk(to_do_id)
    if (!todo) return res.status(404).json({ status: "error", message: "Todo not found. If you want to create new todo, please select 'create' mode." })
    await todo.update({ subject, reserved_time, brief, level, author })
    return res.json({ status: "success", message: "ok." })
  } catch (error) {
    next(error)
  }
})


module.exports = router
