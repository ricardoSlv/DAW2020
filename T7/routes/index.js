import { Router } from 'express';
const router = Router();

import * as Student from '../controllers/student.js'

/* GET home page. */
router.get('/students', function(req, res, next) {
  Student.list()
    .then(data=>res.render('students',{list: data}))
    .catch(err=>res.render('error',{error: err}))
});

export default router;
