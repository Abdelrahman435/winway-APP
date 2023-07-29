const util = require("util");
const { connection } = require("../DB/dbConnection");

async function playcourse(id) {
  const query = util.promisify(connection.query).bind(connection);
  const course = await query(
    "SELECT c.id As course_id, c.name, c.description, v.fileName, v.image, v.id As video_id, mc.name_of_module AS model_name FROM courses c JOIN videos v ON c.id = v.course_id  JOIN modulecourses mc ON mc.id = v.module_id  WHERE c.id =?",
    [id]
  );
  return course;
}

module.exports = { playcourse };
