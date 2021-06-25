var express = require('express');
var router = express.Router();


var menuController = require('../controllers/menuController')
var articleController = require('../controllers/articlesController');
var boardController = require('../controllers/boardController')

/* GET users listing. */
router.get('/board/restaurantboard/:restaurantId', function(req, res) {
  console.log('post on /board/restaurant/:restaurantId')
  boardController.getBoard(req,res)
});


router.post('/board/addmenu', function(req, res) {
  console.log('post on /board/addmenu')
  menuController.addMenu(req,res)
});

router.delete('/board/deletemenu/:menuId', function(req, res) {
  console.log('delete on /board/deletemenu/' + req.params.menuId)
  menuController.deleteMenu(req,res)
});

router.put('/board/updatemenu', function(req, res) {
  console.log('put on /board/updatemenu')
  menuController.editMenu(req,res)
});

router.post('/board/addarticle', function(req, res) {
  console.log('post on /board/addarticle')
  articleController.addArticle(req,res)
});

router.delete('/board/deleteArticle/:articleId', function(req, res) {
  console.log('delete on /board/deleteArticle/' + req.params.articleId)
  articleController.deleteArticle(req,res)
});

router.put('/board/updatearticle', function(req, res) {
  console.log('put on /board/updatearticle')
  articleController.editArticle(req,res)
});

module.exports = router;
