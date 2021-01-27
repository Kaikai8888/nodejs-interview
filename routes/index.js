const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.redirect('login')
});
router.get('login', (req, res) => {
  res.render("login");
})
router.get("/welcome", (req, res) => {
  res.render("welcome", { templateName: '大測試家' });
});
router.get("/to-do-list/page", (req, res) => {
  res.render("to-do-list", { templateName: '大測試家' });
});
router.get("/to-do-list/detail/create/page", (req, res) => {
  res.render("to-do-detail", { templateName: '大測試家' });
});
router.get("/to-do-list/detail/:to_do_id", (req, res) => {
  res.render("to-do-detail", { templateName: '大測試家' });
});

module.exports = router