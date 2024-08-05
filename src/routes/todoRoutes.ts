import express from 'express';
import { Todo } from '../models/todo';
import { addTodo, getTodoById } from '../storage/todoStorage';

const router = express.Router();

/**
 * Create a new todo
 */
router.post('/', (req, res) => {
  const { id, title, completed } = req.body;
  const newTodo: Todo = { id, title, completed };
  addTodo(newTodo);
  res.status(201).json(newTodo);
});

/**
 * Get a todo by id
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const todo = getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

export default router;
