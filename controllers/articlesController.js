const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var db = require('../database')
var Sequelize = require('sequelize')

const articleModel = require('../models/articles')

class articlesController {

    async addArticle(req,res){
        articleModel.create({
                                "restaurantId":req.body.restaurantId,
                                "name":req.body.name,
                                "category":req.body.category,
                                "description":req.body.description,
                                "price":req.body.price,
                                "pictureLink":req.body.pictureLink
                            })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
    }

    async editArticle(req,res){
        articleModel.update({
            "name":req.body.name,
            "category":req.body.category,
            "description":req.body.description,
            "price":req.body.price,
            "pictureLink":req.body.pictureLink
        },{
            where:{
                "id":req.body.articleId
            }
        }
        )
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
    }

    async deleteArticle(req,res){
        articleModel.update({
            "restaurantId":null,
        },{
            where:{
                "id":req.params.articleId
            }
        }
        )
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
    }

    
}

module.exports = new articlesController()