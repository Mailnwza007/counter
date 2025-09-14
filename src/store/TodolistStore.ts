// TodoList Store
import { create } from 'zustand'

interface TodoInterface {
    message: string;
    todoList: string[];
    addTodo: (msg: string) => void;
    removeTodo: (index: number) => void;
    clearTodos: () => void;
    
}

export const useTodoStore = create<TodoInterface>((set) => ({
    message: "Todo List",
    todoList: [],

    addTodo: (msg: string) => set((state) => ({ todoList: [...state.todoList, msg] })),

    removeTodo: (index: number) => set((state) => ({
        todoList: state.todoList.filter((_: string, i: number) => i !== index)
    })),

    clearTodos: () => set({ todoList: [] }),
}));


