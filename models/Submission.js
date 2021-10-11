const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema({
    name: String,
    discordTag: String,
    submissionLink: String,
    event: mongoose.Types.ObjectId,
    score: mongoose.Types.Decimal128

});

mongoose.model("submissions", submissionSchema);