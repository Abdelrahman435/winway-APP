const util = require("util");
const fs = require("fs");

const { getCategories, getCategory } = require("../services/categoriesService");
const { getTopMentors, create} = require("../services/mentorsService");
const { getTopCourses, getcourse} = require("../services/coursesService");

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
    const mentors = await getTopMentors();
    if (mentors.length > 0) {
      mentors.map((mentor) => {
        mentor.image = "http://" + req.hostname + ":3000/" + mentor.image;
      });
      res.status(200).json(mentors);
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
        course.image = "http://" + req.hostname + ":3000/" +course.image;
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

async function addMentor(req, res) {
  try {
    if (!req.file) {
      // Check if image file exists
      return res.status(400).json({
        errors: [{ msg: "Image is Required" }],
      });
    }
    if (!req.body.name) {
      // Check if image file exists
      return res.status(400).json({
        errors: [{ msg: "Name is Required" }],
      });
    }
    const mentor = {
      name: req.body.name,
      image: req.file.filename,
    };
    await create(mentor);
    res.status(200).json("success")
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

async function getCourse(req, res, next) {
  try{
    const course = await getcourse(req.params.id)
    if(course){
      course.image = "http://" + req.hostname + ":3000/" +course.image; 
      res.status(200).json(course); 
    }
  }catch(err){
    console.error(err);
    res.status(500).json({ errors: ["Internal server error"] });
  }
}

module.exports = { showCategories, showTopCourses, showTopMentors, addMentor, getCourse};
