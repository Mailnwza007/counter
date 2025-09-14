// components/TodoItem.tsx
import { useTodoStore } from '../store/todoStore';

interface TodoItemProps {
  task: string;
  index: number;
}

function TodoItem({ task, index }: TodoItemProps) {
  const deleteTask = useTodoStore((state) => state.deleteTask);

  return (
    <li style={{ margin: "5px 0" }}>
      {task}
      <button
        onClick={() => deleteTask(index)}
        style={{ marginLeft: 10, color: "red" }}
      >
        ลบ
      </button>
    </li>
  );
}

export default TodoItem;