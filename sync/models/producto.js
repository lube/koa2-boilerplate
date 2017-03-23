'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  const Producto = sequelize.define('Producto', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'El producto debe tener un nombre.'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'El producto debe tener un nombre.'
        }
      }
    },
    contenido: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'El producto debe tener un contenido válido.'
      },
      validate: {
        min: {
          args: 1,
          msg: 'El producto debe tener un como mínimo 1 unidad de algo.'
        }
      }
    }
  }, {
    tableName: 'producto',
    classMethods: {
      associate: function associate(models) {
        Producto.hasMany(models.Compra, { as: 'compras', foreignKey: 'producto' });
        Producto.hasMany(models.Avistamiento, { as: 'avistamientos', foreignKey: 'producto' });
      }
    },
    paranoid: true
  });
  return Producto;
};

;