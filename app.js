const express = require("express");
const app = express();
const { engine } = require ('express-handlebars');
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");



// Config
  // Template Engine

  app.engine("handlebars", engine())
  app.set("view engine", "handlebars")
  // app.set("views", "./views");

  // DataBase Conection

  const sequelize = new Sequelize('vitydb', 'root', 'admin', {
    host: "localhost",
    dialect: "mysql"
  })

  //
//Routes

  app.get('/cad', function(req, res) {
    res.render('cadForm')
  })

  app.get('/singup', function(req, res) {
    
  })



app.listen(8080, function(){console.log("server started")});