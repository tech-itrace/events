const express = require("express");

const {
    getAllEvents,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent,
} = require("../controllers/EventController");

const router = express.Router();

router.route("/")
    .get(getAllEvents)
    .post(createEvent);
router.route("/:id")
    .get(getEventById)
    .put(updateEvent)
    .delete(deleteEvent);

module.exports = router;
