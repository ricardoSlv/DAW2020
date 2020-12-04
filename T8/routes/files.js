import { Router } from 'express'
const router = Router()

import fs from "fs"
import path, { join } from "path"
const __dirname = path.resolve(path.dirname(''));

import multer from "multer"
const upload = multer({ dest: 'uploads/' })

import * as File from '../controllers/file.js'

router.get('/', (_, res,) => {
    File.list()
        .then(data => {res.render('files',{files: data})})
        .catch(err => {res.render('error', { error: err })})
})

router.get('/upload', (_req, res, _next) => {
    res.render('files_upload')
})

router.get('/download/:fname', (req, res) => {
    res.download('./public/fileStore/' + req.params.fname)
})

router.post('/', upload.array('myFile'), (req, res) => {

    req.files.forEach((file,i) => {

        const oldPath = join(__dirname, file.path)
        const newPath = join(__dirname, 'public/fileStore', file.originalname)
        fs.rename(oldPath, newPath, () => console.log(newPath))

        const d = new Date().toISOString().split(0, 16)
        File.insert(
            {
                date: d,
                desc: req.body.desc[i],
                name: file.originalname,
                size: file.size,
                mimetype: file.mimetype
            })

    })
    res.redirect('/files')
})

export default router;
