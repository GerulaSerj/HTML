// Родительская функция для электроприборов
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}
  
// Методы родительской функции
ElectricalAppliance.prototype.turnOn = function() {
    this.pluggedIn = true;
    console.log(this.name + ' включен(а) в розетку.');
};
  
ElectricalAppliance.prototype.turnOff = function() {
    this.pluggedIn = false;
    console.log(this.name + ' выключен(а) из розетки.');
};
  
// Конкретный прибор - настольная лампа
function DeskLamp(power, brightness) {
    ElectricalAppliance.call(this, 'Настольная лампа', power);
    this.brightness = brightness;
}
  
// Наследование прототипа родительской функции
DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;
  
// Дополнительный метод для настольной лампы
DeskLamp.prototype.adjustBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log('Яркость настольной лампы изменена на ' + newBrightness);
};
  
// Конкретный прибор - компьютер
function Computer(power, brand) {
    ElectricalAppliance.call(this, 'Компьютер', power);
    this.brand = brand;
}
  
// Наследование прототипа родительской функции
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;
  
// Дополнительный метод для компьютера
Computer.prototype.bootUp = function() {
    console.log(this.brand + ' компьютер загружается...');
};
  
// Создание экземпляров приборов
const deskLamp = new DeskLamp(60, 'high');
const computer = new Computer(500, 'Apple');
  
// Включение и выключение приборов
deskLamp.turnOn();
computer.turnOn();
  
// Изменение яркости настольной лампы
deskLamp.adjustBrightness('low');

// Выключение приборов
deskLamp.turnOff();
computer.turnOff();