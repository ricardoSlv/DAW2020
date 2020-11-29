import Student from "../models/student.js";

export function list(){
    return Student
        .find()
        .sort({nome: 1})
        .exec()
}

export function lookup(id){
    return Student
        .findOne({numero: id})
        .exec()
}

export function insert(student){
    const newStudent = new Student(student)
    return newStudent.save()
}

export function deleteOne(studentId){
    Student.findByIdAndDelete(studentId).exec()
}

export function updateOne(student){
    Student.findByIdAndUpdate(student._id,student).exec()
}