import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: String,
    desc: String,
    date: [String],
    size: Number,
    mimetype: String,
},{versionKey: false});

export default mongoose.model('student', studentSchema)
