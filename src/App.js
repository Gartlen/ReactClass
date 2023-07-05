import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react'

const defaultTodos = [
  { text: 'Aprender JavaScript', completed: false },
  { text: 'Hacer una pagina web', completed: false },
  { text: 'Bañarme', completed: true },
  { text: 'Jugar Minecraft', completed: false },
];

function App() {
  return (
    
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch/>

      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
      ))}
      </TodoList>

      <CreateTodoButton/>
      
      
    </>
  ); 
}



export default App;
