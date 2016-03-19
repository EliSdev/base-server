var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    createdAt: Date,
    updatedAt: Date
});

userSchema.methods.logUser = function() {
    console.log(this);
};

module.exports = mongoose.model("User", userSchema);
