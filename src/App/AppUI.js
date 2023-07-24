
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem/Index';

function AppUi ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
    
        <>
          <TodoCounter
          completed={completedTodos} total={totalTodos} />
          <TodoSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          />
    
          <TodoList>
            {loading && <p>Estamos caragando...</p>}
            {error && <p>Desespérate, hubo un error!!</p>}
            {(!loading && searchedTodos.length ===0) && <p>¡Crea tu primer todo!</p>} 
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

export {AppUi}