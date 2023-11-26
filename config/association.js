import Categories from "../models/categories.js";
import Notifications from "../models/notification.js";
import Transactions from "../models/transactions.js";
import Users from "../models/users.js";

Users.hasMany(Transactions, {
  foreignKey: "UserID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  
});


Categories.hasMany(Transactions, {
  foreignKey: "CategoryID",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});



Transactions.hasOne(Notifications, { foreignKey: "TransactionID" });
