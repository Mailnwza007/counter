// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './Component/TodoInput'
import TodoList from './Component/TodoList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My Todolist</h1>
        <TodoInput />
        <TodoList />
      </div>
    </>
  )
}

export default App
