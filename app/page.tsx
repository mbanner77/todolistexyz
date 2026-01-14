"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface Todo {
  id: number;
  text: string;
  category: string;
  priority: string;
  dueDate: string;
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) as Todo[] : [];
  });

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, category: string, priority: string, dueDate: string): void => {
    const newTodo: Todo = { id: Date.now(), text, category, priority, dueDate };
    setTodos([...todos, newTodo]);
  };

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const text = (form.elements.namedItem('text') as HTMLInputElement).value;
    const category = (form.elements.namedItem('category') as HTMLInputElement).value;
    const priority = (form.elements.namedItem('priority') as HTMLInputElement).value;
    const dueDate = (form.elements.namedItem('dueDate') as HTMLInputElement).value;
    addTodo(text, category, priority, dueDate);
    form.reset();
  };

  return (
    <div className={`p-6 ${darkMode ? 'dark' : ''}`}>
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="text" placeholder="Todo" required />
        <Input name="category" placeholder="Category" required />
        <select name="priority" required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <Input name="dueDate" type="date" required />
        <Button type="submit">Add Todo</Button>
      </form>
      <ul className="space-y-4 mt-6">
        {todos.map(todo => (
          <Card key={todo.id}>
            <CardHeader>
              <span className="text-lg font-semibold text-zinc-100">{todo.text}</span>
            </CardHeader>
            <CardContent>
              <span className="text-sm text-zinc-400">{todo.category}</span> | 
              <span className="text-sm text-zinc-400">{todo.priority}</span> | 
              <span className="text-sm text-zinc-400">{todo.dueDate}</span>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}