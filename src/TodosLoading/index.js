import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className='loading_contenedor'> 
      <div class="typing-indicator">
        <div class="typing-circle"></div>
        <div class="typing-circle"></div>
        <div class="typing-circle"></div>
        <div class="typing-shadow"></div>
        <div class="typing-shadow"></div>
        <div class="typing-shadow"></div>
      </div>
    </div>
  );
}

export { TodosLoading };