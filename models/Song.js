const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
const Song = sequelize.define("Song",{
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER
})

module.exports = {
    Song
};