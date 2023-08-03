const util = require("util");
const { connection } = require("../DB/dbConnection");

async function getTopCourses() {
  const query = util.promisify(connection.query).bind(connection);
  const course = await query(
    "SELECT c.*, AVG(rr.rating) as avg_rating FROM courses c JOIN reviews rr ON c.id = rr.courseId WHERE c.id IN (SELECT courseId FROM reviews) GROUP BY c.id ORDER BY avg_rating DESC LIMIT 10"
  );
  return course;
}

async function getcourse(id) {
  const query = util.promisify(connection.query).bind(connection);
  const reviews = await query(
    "SELECT COUNT(*) AS totalReviews, AVG(rating) AS avgRating FROM reviews WHERE courseId = ?",
    [id]
  );
  const course = await query("SELECT * FROM courses WHERE id = ?", [id]);
  return { ...course[0], ...reviews[0] };
}

async function searchCourses(search) {
  const query = util.promisify(connection.query).bind(connection);
  const courses = await query(
    `select id, name, price, description, image from courses ${search}`
  );
  if(courses.length > 0) {
    return courses
  }
  return null;
}

async function history(data) {
  const query = util.promisify(connection.query).bind(connection);
  
  // Check if the same search query has already been inserted for the user
  const existingRow = await query("SELECT * FROM history WHERE search = ? AND user_id = ?", [data.search, data.user_id]);
  
  // If no existing row is found, insert the new row
  if (existingRow.length === 0) {
    await query("INSERT INTO history SET ?", [data]);
  }
}

async function gethistory(id){
  const query = util.promisify(connection.query).bind(connection);
  return await query('SELECT search FROM history WHERE user_id = ?', [id])
}

module.exports = { getTopCourses, getcourse, searchCourses, history, gethistory};
