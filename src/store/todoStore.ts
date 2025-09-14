// store/todoStore.ts
import { create } from 'zustand';

interface TodoStore {
  tasks: string[];
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  tasks: [],
  addTask: (task: string) => 
    set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (index: number) => 
    set((state) => ({ 
      tasks: state.tasks.filter((_, i) => i !== index) 
    })),
}));