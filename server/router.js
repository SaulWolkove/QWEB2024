const express = require("express");



const readEventsRoute = require("./EventAPI/readEventRoute");
const deleteEventsRoute = require("./EventAPI/deleteEventRoute");
const createEventsRoute = require("./EventAPI/createEventRoute");

const createJobsRoute = require("./JobAPI/createJobRoute");
const readJobsRoute = require("./JobAPI/readJobRoute");
const deleteJobsRoute = require("./JobAPI/deleteJobRoute");
const authenticator = require("./authenticator");

const router = express.Router();


router.get("/", readEventsRoute);
router.post("/", createEventsRoute)
router.delete("/:id", deleteEventsRoute)

router.post("/jobs", createJobsRoute)
router.get("/jobs", readJobsRoute)
router.delete("/jobs/:id", deleteJobsRoute)


router.post("/auth", authenticator)





module.exports = router