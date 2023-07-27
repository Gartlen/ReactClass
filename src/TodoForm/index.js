import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm (){
    const {
        addTodo,
        setOpenModal,
    } =React.useContext(TodoContext);

    const [newTodoValue, setNewTododValue] = React.useState('')

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTododValue(event.target.value);
    };

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
            <button type="" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add" onClick={onSubmit}>Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm }