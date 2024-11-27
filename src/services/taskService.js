const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = async () => {
    return await Task.find();
};

// Get a task by ID
exports.getTaskById = async (id) => {
    return await Task.findById(id);
};

// Create a new task
exports.createTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

// Update a task
exports.updateTask = async (id, taskData) => {
    return await Task.findByIdAndUpdate(id, taskData, { new: true, runValidators: true });
};

// Delete a task
exports.deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
};
