const eventService = require("../services/EventService");

exports.getAllEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents();

        res.json({ data: events, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.json({data:event, status: "success"})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await eventService.getEventById(req.params.id);
        res.json({data: event, status: "success"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const event = await eventService.updateEvent(req.params.id, req.body);
        res.json({ data: event, status: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await eventService.deleteEvent(req.params.id);
        res.json({data: event, status: "success"});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};