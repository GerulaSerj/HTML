function printOwnProperties(obj) {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key + ': ' + obj[key]);
      }
    }
  }

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
  
printOwnProperties(obj);