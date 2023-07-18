import React from "react";

function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    
    let parcedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parcedItem = initialValue;
    } else {
      parcedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parcedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    return [item, saveItem];
  }

  export {useLocalStorage}
  