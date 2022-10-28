const express = require("express");
const app = express();
const { engine } = require ('express-handlebars');
const exphbs = require("express-handlebars");
const Sequelize = require("sequelize");




// Config
  // Template Engine

  app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));

  app.set("view engine", "hbs");
  app.use(express.static(__dirname + '/public'));
  // app.set("views", "./views");

  // DataBase Conection
  const sequelize = new Sequelize('vitydb', 'root', 'admin', {
    host: "localhost",
    dialect: "mysql"
  })

  //
//Routes

  
  app.get('/', function(req, res) {
    res.render('home')
  })
  app.get('/cad', function(req, res) {
    res.render('cadForm')
  })

  app.get('/singup', function(req, res) {
    
  })



app.listen(8080, function(){console.log("server started")});