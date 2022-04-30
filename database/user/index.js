import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: "Number",
    },
    role: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee"
    }
}, {
    timestamps: true
});

export const UserModel = mongoose.model("User", UserSchema);