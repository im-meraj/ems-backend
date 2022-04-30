import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    empid: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    doj: { type: Date, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    panNo: { type: String, required: true, unique: true },
    panImage: { type: String, required: true },
}, {
    timestamps: true
});

export const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
