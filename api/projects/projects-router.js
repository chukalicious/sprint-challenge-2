const express = require("express");

const router = express.Router();

const Projects = require("./projects-model");

router.get(`/`, (req, res) => {
  Projects.get()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => res.status(500).json({ message: "server error" }));
});

router.post("/", async (req, res) => {
  const newProject = req.body;
  if (!newProject.project_name) {
    res.status(400).json({ message: "a project name is required" });
  } else {
    try {
      const project = await Projects.create(newProject);
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

module.exports = router;
