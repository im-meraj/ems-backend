import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    deptId: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export const DepartmentModel = mongoose.model("Department", DepartmentSchema);