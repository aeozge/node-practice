const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('all the items from the file')
}
const createTasks = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}
const updateTasks = (req, res) => {
    res.send('update')
}
const deleteTasks = (req, res) => {
    res.send('delete')
}

module.exports = {
    getAllTasks,
    getTask,
    createTasks,
    updateTasks,
    deleteTasks
}