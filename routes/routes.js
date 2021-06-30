var express = require('express');
var router = express.Router();


var menuController = require('../controllers/menuController')
var articleController = require('../controllers/articlesController');
var boardController = require('../controllers/boardController')

/* GET users listing. */
router.get('/restaurantboard/:restaurantId', function(req, res) {
  console.log('post on /board/restaurant/:restaurantId')
  boardController.getBoard(req,res)
});

router.get('/available', function(req, res) {
  console.log('ask for availableity')
  res.send(true)
});

router.post('/menu', function(req, res) {
  console.log('post on /board/addmenu')
  menuController.addMenu(req,res)
});

router.delete('/menu/:menuId', function(req, res) {
  console.log('delete on /board/deletemenu/' + req.params.menuId)
  menuController.deleteMenu(req,res)
});

router.put('/menu/:id', function(req, res) {
  console.log('put on /board/updatemenu')
  menuController.editMenu(req,res)
});

router.post('/article', function(req, res) {
  console.log('post on /board/addarticle')
  articleController.addArticle(req,res)
});

router.delete('/article/:articleId', function(req, res) {
  console.log('delete on /board/deleteArticle/' + req.params.articleId)
  articleController.deleteArticle(req,res)
});

router.put('/article/:id', function(req, res) {
  console.log('put on /board/updatearticle')
  articleController.editArticle(req,res)
});

router.get('/restaurants',(req,res) => {
  console.log('get on /board/restaurants')
 boardController.getRestaurantList(req,res)
});

module.exports = router;
