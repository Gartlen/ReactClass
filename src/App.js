import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react'

// const defaultTodos = [
//   { text: 'Aprender JavaScript', completed: false },
//   { text: 'Hacer una pagina web', completed: false },
//   { text: 'Bañarme', completed: true },
//   { text: 'Jugar Minecraft', completed: true },
  
// ];
 
 
//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//  localStorage.removeItem(''TODOS_V1)


function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  
  let parcedTodos;
  
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parcedTodos = [];
  } else {

    parcedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos]= React.useState(parcedTodos)
  const [searchValue, setSearchValue]= React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
   
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    
    <>
      <TodoCounter
      completed={completedTodos} total={totalTodos} />
      <TodoSearch
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      </TodoList>

      <CreateTodoButton/>
      
      
    </>
  ); 
}



export default App;
