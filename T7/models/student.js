import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    numero: String,
    nome: String,
    git: String,
    tpc: [Number]
});

export default mongoose.model('student', studentSchema)