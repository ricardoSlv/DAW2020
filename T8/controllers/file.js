import File from "../models/file.js";

export function list(){
    return File
        .find()
        .sort({name: 1})
        .exec()
}

export function insert(file){
    const newFile = new File(file)
    return newFile.save()
}
