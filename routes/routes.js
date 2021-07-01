var express = require('express');
var router = express.Router();


var menuController = require('../controllers/menuController')
var articleController = require('../controllers/articlesController');
var boardController = require('../controllers/boardController')

/* GET users listing. */
router.get('/restaurantboard/:restaurantId', function(req, res) {
  boardController.getBoard(req,res)
});

router.get('/available', function(req, res) {
  res.send(true)
});

router.post('/menu', function(req, res) {
  menuController.addMenu(req,res)
});

router.delete('/menu/:menuId', function(req, res) {
  menuController.deleteMenu(req,res)
});

router.put('/menu/:id', function(req, res) {
  menuController.editMenu(req,res)
});

router.post('/article', function(req, res) {
  articleController.addArticle(req,res)
});

router.delete('/article/:articleId', function(req, res) {
  articleController.deleteArticle(req,res)
});

router.put('/article/:id', function(req, res) {
  articleController.editArticle(req,res)
});

router.get('/restaurants',(req,res) => {
 boardController.getRestaurantList(req,res)
});

module.exports = router;
