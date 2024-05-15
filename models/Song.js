const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Song = sequelize.define("Song",{
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER
})

module.exports = {
    Song
};