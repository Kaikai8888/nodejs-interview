const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.redirect('login')
});
router.get('login', (req, res) => {
  res.render("login");
})
router.get("/welcome", (req, res) => {
  res.render("welcome", { templateName: 'Kelly' });
});
router.get("/to-do-list/page", (req, res) => {
  res.render("to-do-list", { templateName: 'Kelly' });
});
router.get("/to-do-list/detail/create/page", (req, res) => {
  res.render("to-do-detail", { templateName: 'Kelly' });
});
router.get("/to-do-list/detail/:to_do_id", (req, res) => {
  res.render("to-do-detail", { templateName: 'Kelly' });
});

module.exports = router