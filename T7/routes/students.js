import { Router } from 'express'
const router = Router()
import multer from 'multer'

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});


import * as Student from '../controllers/student.js'

router.get('/', (_, res, ) => {
   Student.list()
    .then(data=>res.render('alunos',{list: data}))
    .catch(err=>res.render('error',{error: err}))
});

router.get('/registar', (req, res, _) => {
  res.render('alunos-registar')
});

router.get('/editar/:number', (req, res, _) => {
  const studentNumber = req.params.number;
  Student.lookup(studentNumber)
    .then(data=>res.render('alunos-editar',{student: data}))
    .catch(err=>res.render('error',{error: err}))
});

router.get('/:number', (req, res, _) => {
  const studentNumber = req.params.number;
  Student.lookup(studentNumber)
    .then(data=>res.render('aluno',{student: data}))
    .catch(err=>res.render('error',{error: err}))
});

router.post('/', upload.single('imagem'), (req, res, _) => {
  console.log(req.file)
  Student.insert(req.body)
    .then(data=>res.send(data))
    .catch(err=>res.render('error',{error: err}))
});

router.put('/:number', (req, res, _) => {
  Student.updateOne(req.params.number,req.body)
    .then(data=>res.send(data))
    .catch(err=>res.render('error',{error: err}))
});

router.delete('/:number', (req, res, _) => {
  Student.deleteOne(req.params.number)
    .then(data=>res.send(data))
    .catch(err=>res.render('error',{error: err}))
});

export default router;
