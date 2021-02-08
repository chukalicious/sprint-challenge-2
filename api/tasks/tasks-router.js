const express = require("express");

const router = express.Router();

const Tasks = require("./tasks-model");

router.get(`/`, (req, res) => {
  Tasks.get()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(500).json({ message: "server error" }));
});

router.post("/", async (req, res) => {
  const newTask = req.body;
  if (!newTask.task_description) {
    res.status(400).json({ message: "enter a description for this " });
  } else {
    try {
      const task = await Tasks.create(newTask);
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

module.exports = router;
