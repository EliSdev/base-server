var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var companySchema = Schema({
    name: { type: String, required: true, unique: true },
    domain: { type: String, required: true, unique: true },
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model("Company", companySchema);
