'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Unidad = sequelize.define('Unidad', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
          args: false,
          msg: 'La unidad debe tener un nombre.'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'La unidad debe tener un nombre.'
        }
      }
    }
  }, {
    tableName: 'unidad',
    classMethods: {
      associate: function associate(models) {
        Unidad.hasMany(models.Producto, { as: 'productos', foreignKey: 'unidad' });
      }
    },
    paranoid: true
  });

  return Unidad;
};

;