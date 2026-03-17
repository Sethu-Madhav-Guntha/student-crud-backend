import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
});

const userModel = model("user", userSchema);
module.exports = userModel;