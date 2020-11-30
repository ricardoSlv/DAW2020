import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    numero: String,
    nome: String,
    git: String,
    tpc: [Number],
    imagem: String
},{versionKey: false});

export default mongoose.model('student', studentSchema)