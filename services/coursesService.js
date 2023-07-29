const util = require("util");
const { connection } = require("../DB/dbConnection");

async function getTopCourses() {
  const query = util.promisify(connection.query).bind(connection);
  const course = await query(
    "SELECT c.*, AVG(rr.rating) as avg_rating FROM courses c JOIN reviews rr ON c.id = rr.courseId WHERE c.id IN (SELECT courseId FROM reviews) GROUP BY c.id ORDER BY avg_rating DESC LIMIT 10"
  );
  return course;
}

module.exports = { getTopCourses };
