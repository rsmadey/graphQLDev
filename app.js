
const EventEmitter = require('events');
const tutorial = require('./tutorial');

const eventEmitter = new EventEmitter();


eventEmitter.on('tutorial', (num1,num2)=>{
  console.log(num1 + num2)
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name;
  }

  get name(){
    return this._name;
  }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

christina.on('name', ()=>{
  console.log('my name is ' + christina.name);
});

pedro.on('name', ()=>{
  console.log('my name is ' + pedro.name);
});


pedro.emit('name');
christina.emit('name');

console.log("Hellow world from nodejs");
console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
