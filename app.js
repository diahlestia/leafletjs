const express = require('express')
const app = express()
const PORT = 3000
const HomeController = require('./controllers/homeController')

app.use(express.static('app'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))

app.get('/', HomeController.showMaps)

app.listen(PORT, ()=>{
    console.log(`app is listening on PORT: ${PORT}`)
})