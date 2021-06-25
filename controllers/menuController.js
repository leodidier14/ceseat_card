const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var db = require('../database')
var Sequelize = require('sequelize')

const menuModel = require('../models/menus')
const menuArticlesModel = require('../models/menusArticles')

class menuController {

    async addMenu(req,res){
        menuModel.create({
                                "restaurantId":req.body.restaurantId,
                                "name":req.body.name,
                                "description":req.body.description,
                                "price":req.body.price,
                                "pictureLink":req.body.pictureLink
                            })
        .then(result => { db.query('SELECT @@IDENTITY', {type: Sequelize.QueryTypes.SELECT})
                            .then(id => {
                                
                                req.body.ArticleList.forEach( article => {

                                    console.log({"menuId":id[0][''],"articleId":article.id})
                                    menuArticlesModel.create({"menuId":id[0][''],"articleId":article.id})
                                })
                            })
                            res.status(200).send(result)
        })
        .catch(error => res.status(500).send(error))
    }

    async editMenu(req,res){
        menuModel.update({
            "name":req.body.name,
            "category":req.body.category,
            "description":req.body.description,
            "price":req.body.price,
            "pictureLink":req.body.pictureLink
        },{
            where:{
                "id":req.body.menuId
            }
        }
        )
        .then(result => {
            console.log('ICI')
            menuArticlesModel.destroy({where: {'menuId': req.body.menuId}}).then( () => {
                req.body.articleList.forEach( article =>{
                    menuArticlesModel.create({"menuId":req.body.menuId,"articleId":article.id}).catch(error => res.status(500).send(error))
            }
            )
        })
            }
        ).catch(error => res.status(500).send(error))
    }

    async deleteMenu(req,res){
        menuModel.update({
            "restaurantId":null,
        },{
            where:{
                "id":req.params.menuId
            }
        }
        )
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error))
    }
}

module.exports = new menuController()