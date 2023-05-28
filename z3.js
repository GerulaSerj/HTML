const createEmptyObject = () => {
    return Object.create(null);
  };

const emptyObject = createEmptyObject();
console.log(emptyObject); // Вывод: {}