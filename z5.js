// Родительский класс для электроприборов
class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
turnOn() {
      this.pluggedIn = true;
      console.log(`${this.name} включен(а) в розетку.`);
    }
  
turnOff() {
      this.pluggedIn = false;
      console.log(`${this.name} выключен(а) из розетки.`);
    }
}
  
// Конкретный класс - настольная лампа
class DeskLamp extends ElectricalAppliance {
    constructor(power, brightness) {
      super('Настольная лампа', power);
      this.brightness = brightness;
    }
  
    adjustBrightness(newBrightness) {
      this.brightness = newBrightness;
      console.log(`Яркость настольной лампы изменена на ${newBrightness}`);
    }
}
  
// Конкретный класс - компьютер
class Computer extends ElectricalAppliance {
    constructor(power, brand) {
      super('Компьютер', power);
      this.brand = brand;
    }
  
    bootUp() {
      console.log(`${this.brand} компьютер загружается...`);
    }
}
  
// Создание экземпляров классов
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