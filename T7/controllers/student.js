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

export async function insert(student){
    const newStudent = new Student(student)
    
    const res = await Student.findOne({numero: newStudent.numero}).exec()
    console.log(res)
    if(res){
        console.log('ola11');
        return new Promise().reject(new Error('Duplicate'))
    }
    else
        return newStudent.save()
        
    //return Student.findOneAndUpdate({numero: newStudent.numero}, {$setOnInsert: newStudent}, {upsert: true}).exec()
}

export function deleteOne(number){
    return Student.findOneAndDelete({numero: number}).exec()
}

export function updateOne(number,student){
    return Student.findOneAndUpdate({numero: number},{$set: student}).exec()
}