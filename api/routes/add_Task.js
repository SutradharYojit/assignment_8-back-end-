const express = require('express');
const router = express();
const taskCtrl = require('../controller/task_ctrl');


router.post('/addTask', taskCtrl.addTasks);

router.post('/update', taskCtrl.updataTask);

router.post('/delete', taskCtrl.deleteTask);

router.get('/getAll/:email', taskCtrl.getTasks);


module.exports = router;