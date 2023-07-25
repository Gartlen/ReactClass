import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem]=React.useState(initialValue);
  const [loading, setLoading]=React.useState(true);
  const [error, setError]=React.useState(false);

    
    
    React.useEffect(()=>{
     setTimeout(( ) =>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parcedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parcedItem = initialValue;
        } else {
          parcedItem = JSON.parse(localStorageItem);
          setItem(parcedItem);
        }
  
        setLoading(false);
        // console.log('halalo menor');
      } catch(error){
        setLoading(false);
        setError(true);
      }
     }, 2000);

    },[]);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };

    return {item, saveItem, loading, error};
  }

  export {useLocalStorage}

  // const defaultTodos = [
//   { text: 'Aprender JavaScript', completed: false },
//   { text: 'Hacer una pagina web', completed: false },
//   { text: 'Bañarme', completed: true },
//   { text: 'Jugar Minecraft', completed: true },
  
// ];
 
 
//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//  localStorage.removeItem('TODOS_V1')
  