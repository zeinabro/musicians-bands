const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

class Band extends Model {};

const Band = sequelize.define('Band',{
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = {
    Band
};