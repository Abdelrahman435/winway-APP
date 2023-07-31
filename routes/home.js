var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");

const {
  showCategories,
  showTopCourses,
  showTopMentors,
  addMentor,
  getCourse,
} = require("../controllers/homeController");
router.get("/getTopCourses", showTopCourses);
router.get("/getTopMentors", showTopMentors);
router.post("/create",upload.single('image') ,addMentor);
router.get("/", (req, res) => res.render("index", { title: "Express" }));
router.get("/course/:id", getCourse);

module.exports = router;
