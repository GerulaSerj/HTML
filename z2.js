const checkProperty = (propertyName, obj) => {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
  };

const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(checkProperty('name', obj)); // Вывод: true
console.log(checkProperty('email', obj)); // Вывод: false