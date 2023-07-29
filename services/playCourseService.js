const util = require("util");
const { connection } = require("../DB/dbConnection");

async function playcourse(id){
    const query = util.promisify(connection.query).bind(connection);
    const course = await query("SELECT c.id, c.name, c.description, v.title, v.description FROM courses c JOIN videos v ON c.id = v.course_id WHERE c.id = <course_id>;", [id]);
    return course
}

module.exports = {playcourse}