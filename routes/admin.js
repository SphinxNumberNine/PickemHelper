const mongoose = require('mongoose')
const adminConfig = require("../config/admin");
const Event = mongoose.model("events");

module.exports = app => {
    app.post("/admin/create_event", async (req, res) => {
        const pass = req.body.adminPassword;
        if (!(adminConfig.passwords.includes(pass))) {
            return res.status(401).send("Request not created by an administrator.")
        }

        const name = req.body.eventName;
        const prize = req.body.prize;
        const submissions = [];
        const ended = false;
        const winner = "TBD";

        const event = await new Event({
            name,
            prize,
            submissions,
            ended,
            winner
        }).save();

        res.status(200).json({
            event,
            message: "event created"
        });
    })
}