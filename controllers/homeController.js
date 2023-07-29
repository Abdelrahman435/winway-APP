const util = require("util");
const fs = require("fs");

const { getCategories, getCategory } = require("../services/categoriesService");
const { getTopMentors } = require("../services/mentorsService");
const { getTopCourses } = require("../services/coursesService");

async function showCategories(req, res, next) {
  try {
    const categories = await getCategories();
    if (categories.length > 0) {
      categories.image = "http://" + req.hostname + ":3000/" + categories.image;
      res.status(200).json(categories);
    } else {
      res.status(404).json({ msg: "No categories found0" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function showTopMentors(req, res, next) {
  try {
    const mentor = await getTopMentors();
    if (mentor.length > 0) {
      mentor.image = "http://" + req.hostname + ":3000/" + mentor.image;
      res.status(200).json(mentor);
    } else {
      res.status(404).json({ errors: ["not found"] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function showTopCourses(req, res, next) {
  try {
    const courses = await getTopCourses();
    if (courses.length > 0) {
      courses.map((course) => {
        course.image = "http://" + req.hostname + ":3000/" + course.image;
      });
      res.status(200).json(courses);
    } else {
      res.status(404).json({ errors: ["not found"] });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

module.exports = { showCategories, showTopCourses, showTopMentors };
