import { DataTypes } from "sequelize";
import sequelize from "../config/db";
import User from "./User";
const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Task user id be empty" },
        len: [1, 10000],
      },
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    task_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Task name cannot be empty" },
        len: [1, 50],
      },
    },
    task_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Task desc cannot be empty" },
        len: [1, 100],
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Tasks",
    timestamps: false,
  }
);
Task.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Task, { foreignKey: "user_id" });
export default Task;
