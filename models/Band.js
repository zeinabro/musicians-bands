const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Band = sequelize.define('Band',{
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = {
    Band
};