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
    console.log(student.imagem)
    console.log(newStudent)
    return newStudent.save()
}

export function deleteOne(number){
    return Student.findOneAndDelete({numero: number}).exec()
}

export function updateOne(number,student){
    return Student.findOneAndUpdate({numero: number},{$set: student}).exec()
}