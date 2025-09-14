// components/TodoList.tsx
import { useTodoStore } from '../store/todoStore';
import TodoItem from './TodoItem';

function TodoList() {
  const tasks = useTodoStore((state) => state.tasks);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;