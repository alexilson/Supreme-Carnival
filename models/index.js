// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag  // pass the model itself in since its already created
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag  // pass the model itself in since its already created
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
