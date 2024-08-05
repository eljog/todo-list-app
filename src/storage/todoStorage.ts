import { Todo } from '../models/todo';

let todos: Todo[] = [];

export function addTodo(todo: Todo): void {
  todos.push(todo);
}

export function getTodoById(id: string): Todo | undefined {
  return todos.find(todo => todo.id === id);
}
