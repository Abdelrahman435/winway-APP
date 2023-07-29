const util = require("util");
const { connection } = require("../DB/dbConnection");

async function getCategories() {
  const query = util.promisify(connection.query).bind(connection);
  const categories = await query("select * from categories");
  return categories;
}

async function getCategory(id) {
  const query = util.promisify(connection.query).bind(connection);
  const category = await query("select * from categories where id = ?", [id]);
  return category;
}

module.exports = { getCategories, getCategory };
