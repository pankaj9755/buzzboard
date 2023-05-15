const connection = require('../helper/db');
const { DataTypes } = require('sequelize');

const Company = connection.define('companies',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    order_id: {
        type:DataTypes.STRING,
        defaultValue:null
    },
    item_name:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    cost:{
        type:DataTypes.INTEGER,
        defaultValue:null
    },
    order_date:{
        type:DataTypes.STRING,
        allowNull:true
    },
    delivery_date:{
        type:DataTypes.STRING,
        allowNull:true
    },
})

module.exports = Company

