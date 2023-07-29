const util = require("util");
const fs = require("fs");
const playcourse = require("../services/playCourseService");

async function playCourse(req, res, next) {
    try{
        const course = await playcourse(req.params.id)
        if(course){
            res.status(200).json(course)
        }
        else{
            res.status(404).json({msg: 'Course not found'})
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ errors: ["Internal server error"] });
    }
}

module.exports = {playCourse}