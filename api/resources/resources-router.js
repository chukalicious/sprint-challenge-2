const express = require("express");

const router = express.Router();

const Resources = require("./resources-model");

router.get(`/`, (req, res) => {
  Resources.get()
    .then((resource) => res.status(200).json(resource))
    .catch((err) =>
      res.status(500).json({ message: "server error", error: err.message })
    );
});

router.post("/", async (req, res) => {
  const newResource = req.body;
  if (!newResource.resource_description) {
    res.status(400).json({
      message: "enter a description for this reource; they need to be unique",
    });
  } else {
    try {
      const resource = await Resources.create(newResource);
      res.status(200).json(resource);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

module.exports = router;
