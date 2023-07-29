const util = require("util");
const { connection } = require("../DB/dbConnection");

async function getTopMentors() {
  const query = util.promisify(connection.query).bind(connection);
  const mentor = await query("select * from mentors where rating = '5'");
  return mentor;
}

module.exports = { getTopMentors };
