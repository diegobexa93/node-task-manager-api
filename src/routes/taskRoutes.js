const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

// Routes
router.get('/', taskController.getTasks);        // Get all tasks
router.get('/:id', taskController.getTaskById);  // Get a task by ID
router.post('/', taskController.createTask);     // Create a new task
router.put('/:id', taskController.updateTask);   // Update a task by ID
router.delete('/:id', taskController.deleteTask);// Delete a task by ID

module.exports = router;
