var Sequelize = require('sequelize')
var db = require('../database')

var menuArticle = db.define("menus_Articles", {

    menuId: {
        type: Sequelize.INTEGER,
        foreignkey: true,
        primaryKey:true
    },
    articleId: {
        type: Sequelize.INTEGER,
        foreignkey: true,
        primaryKey:true
    },

})



module.exports = menuArticle;