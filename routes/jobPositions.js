const express = require("express");
const router = express.Router();
const JobPosition = require("../models/JobPositions");


router.post("/create", async (req, res) => {
  try {
    const jobPosition = new JobPosition(req.body);
    // Assuming req.body.phases is an array of process phase IDs
    jobPosition.phases = req.body.phases;
    await jobPosition.save();
    res.status(201).json({ message: "Job position created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
