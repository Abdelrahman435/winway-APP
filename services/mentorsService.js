const util = require("util");
const { connection } = require("../DB/dbConnection");

async function getTopMentors() {
  const query = util.promisify(connection.query).bind(connection);
  const mentor = await query("select m.*, AVG(r.rating) AS avg_rating from mentors as m join courses as c on m.id = c.mentor_id JOIN reviews AS r ON c.id = r.courseId where m.id in (select mentor_id from courses) group by m.id ORDER BY avg_rating DESC LIMIT 3");
  return mentor;
}

async function create(data){
  const query = util.promisify(connection.query).bind(connection);
  await query("insert into mentors set ?", [data])  
}

module.exports = { getTopMentors, create};
