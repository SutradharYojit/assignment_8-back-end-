const firebase = require('../firebase_config/config');

addTasks = (req, res, next) => {
    email = req.body.email
    data = req.body;
    delete req.body.email

    firebase.collection(email).add(data).then((value) => {
        console.log(value.id);
        return res.status(201).json({ success: true, message: 'Add Task successfully', taskId: value.id});
    }).catch(err => {
        return res.status(404).json({ success: false, message: 'Add Task failed', });
    });
}


getTasks = async (req, res, next) => {
    const email = req.params.email;
    const snapShot = await firebase.collection(email).get();
    const data = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return res.status(200).json({ success: true, data: data });
}

updataTask = async (req, res, next) => {
    const id = req.body.id;
    const email = req.body.email;
    delete req.body.email;
    delete req.body.id;
    const update = req.body;
    const snapShot = await firebase.collection(email).doc(id).update(update);
    return res.status(201).json({ success: true, message: "data update successfullt" });
}

deleteTask = async (req, res, next) => {
    const data = req.body;

    await firebase.collection(data.email).doc(data.id).delete().then((value) => {
        console.log(value);
        return res.status(201).json({ success: true, message: "data delete successfullt" });
    });
}


module.exports = { addTasks, getTasks, updataTask,deleteTask };