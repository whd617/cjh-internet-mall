'use strict';
import { Model } from 'sequelize';
const userSchema = (sequelize, DataTyes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: String,
        unique: true,
        allowNull: false,
      },
      name: {
        type: String,
        allowNull: false,
      },
      password: {
        type: String,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Users.model',
    },
  );
  return User;
};

// 가상의 userId 값을 할당
userSchema.virtual('userId').get(function () {
  return this._id.toHexString();
});

// user 정보를 JSON으로 형변환 할 때 virtual 값이 출력되도록 설정
userSchema.set('toJSON', {
  virtuals: true,
});

export const Usersmodel = Model.model('User', userSchema);

/* import { Module } from './module';
import Module from './module';
import * as Module from './module';
const Modele = await import('./Module'); */
