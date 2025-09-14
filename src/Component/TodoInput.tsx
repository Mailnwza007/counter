// components/TodoInput.tsx
import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';

function TodoInput() {
  const [task, setTask] = useState<string>("");
  const addTask = useTodoStore((state) => state.addTask);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="พิมพ์งานที่ต้องทำ..."
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TodoInput;