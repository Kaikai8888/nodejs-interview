const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express();
const router = require('./routes')

app.engine('hbs', exphbs({ extname: 'hbs' }))
app.set('views', __dirname + '/application/views')
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('application'))
app.use(router)
app.use((error, req, res, next) => {
    console.log(error)
    res.status(404).json({ status: 'error', message: 'Error occurs. Please try again later.' })
})


app.listen(8088, () => {
    console.log("Server is running at http://localhost:" + String(8088));
});
