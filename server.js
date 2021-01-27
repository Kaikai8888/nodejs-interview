const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const router = require('./routes')

app.engine('hbs', exphbs({ extname: 'hbs' }))
app.set('views', __dirname + '/application/views')
app.set('view engine', 'hbs')

app.use(express.static('application'))
app.use(router)


app.listen(8088, () => {
    console.log("Server is running at http://localhost:" + String(8088));
});
