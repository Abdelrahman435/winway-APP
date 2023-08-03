const util = require("util");
const fs = require("fs");
const {
  searchCourses,
  history,
  gethistory,
} = require("../services/coursesService");
const { log } = require("util");

async function search(req, res, next) {
  try {
    let courses = [];
    let search = "";
    if (req.query.search) {
      search = `where name like '%${req.query.search}%' or description like '%${req.query.search}%' or collectionName like '%${req.query.search}%' or content like '%${req.query.search}%'`;
      courses = await searchCourses(search);
      let data = {
        search: req.query.search,
        user_id: req.params.user_id,
      };
      await history(data);
      res.status(200).json(courses);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function getHistory(req, res) {
  try {
    const history = await gethistory(req.params.user_id);
    if (history.length > 0) {
      res.status(200).json(history);
    }else{
    res.status(200).json(null);
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({ errors: ["Internal server error"] });
  }
}

module.exports = { search, getHistory };
