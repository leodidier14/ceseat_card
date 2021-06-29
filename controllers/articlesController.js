const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var db = require('../database')
var Sequelize = require('sequelize')

const articleModel = require('../models/articles')

class articlesController {
    async addArticle(req,res){
        console.log(req.body)
        articleModel.create({
                                "restaurantId":req.body.restaurantId,
                                "name":req.body.name,
                                "category":req.body.type,
                                "description":req.body.description,
                                "price":parseFloat(req.body.price),
                                "pictureLink":req.body.image
                            })
        .then(result => res.status(200).send(result))
        .catch(error =>{console.log(error); res.status(400).send(error)})
    }

    async editArticle(req,res){
        articleModel.update({
            "name":req.body.name,
            "category":req.body.category,
            "description":req.body.description,
            "price": parseFloat(req.body.price),
            "pictureLink":req.body.pictureLink
        },{
            where:{
                "id":req.body.id
            }
        }
        )
        .then(result => res.status(200).send(result))
        .catch(error => {console.log(error); res.status(400).send(error)})
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
        .catch(error => {console.log(error); res.status(400).send(error)})
    }

    
}

module.exports = new articlesController()