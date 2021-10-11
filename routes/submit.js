const mongoose = require('mongoose')
const Event = mongoose.model("events");
const Submission = mongoose.model("submissions");

module.exports = app => {
    app.post("/events/:eventID/submit", async (req, res) => {
        const event = await Event.findById(req.params.eventID);
        const { name, discordTag, submissionLink } = req.body;
        const eventId = event._id;
        const score = 0;

        const submission = await new Submission({
            name,
            discordTag,
            submissionLink,
            event: eventId,
            score
        }).save()

        const prevSubmissions = event.submissions;
        prevSubmissions.push(submission._id);
        event.submissions = prevSubmissions;
        const updatedEvent = await event.save()

        res.status(200).send({
            event: updatedEvent,
            submission,
            message: `Submission recieved for event ${event.name}`
        })
    })
}