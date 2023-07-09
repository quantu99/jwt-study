const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = new Schema(
    {
        username:{type: String, require: true, unique: true},
        email:{type: String, require: true, unique: true},
        password:{type: String, require: true},
        admin:{type: Boolean, default: false},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", User)