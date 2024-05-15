const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

const Musician = sequelize.define("Musician",{
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
})

module.exports = {
    Musician
};