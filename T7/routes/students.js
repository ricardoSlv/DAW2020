import { Router } from 'express';
const router = Router();

import * as Student from '../controllers/student.js'

router.get('/', (_, res, ) => {
   Student.list()
    .then(data=>res.render('students',{list: data}))
    .catch(err=>res.render('error',{error: err}))
});

router.get('/:number', (req, res, _) => {
  const studentNumber = req.params.number;
  Student.lookup(studentNumber)
    .then(data=>res.send(data))
    .catch(err=>res.render('error',{error: err}))
});

router.post('/', (req, res, _) => {
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
