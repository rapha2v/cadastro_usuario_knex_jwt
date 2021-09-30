var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");//Importando a classe HomeController
var UserController = require("../controllers/UsersController");//Importando a classe UsersController

router.get('/', HomeController.index);//Rota utilizando o método index da classe HomeController
router.post('/user', UserController.create);//Rota utilizando o método create da classe UsersController

module.exports = router;