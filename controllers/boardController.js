const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var db = require('../database')
var Sequelize = require('sequelize')



class boardController {

    async getBoard(req,res){
        db.query('EXEC getRestaurantBoard '+req.params.restaurantId)
        .then(result =>{console.log(result);res.status(200).send(JSON.parse(result[0][0].BoardList)[0])})
        .catch(error => {console.log(error); res.status(400).send(error)})
    }

    async getRestaurantList(req,res){
        db.query('EXEC getRestaurantsList ')
        .then(result =>res.status(200).send(JSON.parse(result[0][0].restaurants)))
        .catch(error => {console.log(error); res.status(400).send(error)})
    }
}
module.exports = new boardController()