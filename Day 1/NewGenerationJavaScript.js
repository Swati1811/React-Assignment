//Destructuring

const Array=[1,2,3];
[a,,b]=Array;
console.log(a);
console.log(b);


//Rest
const filter=(...ar)=>{
  return ar.filter(eq=>eq===1);
}

console.log(filter(1,2,1));

//Spread

//Objects
const person={
  name:'Swati'
};

const newPerson={
  ...person,
  age:21
}
console.log(newPerson);

//Spread Array
const Array=[1,2,3,4,5];
console.log(Array);

const newArray=[...Array,6,7,8];
console.log(newArray);

//Classes properties and methods

class Human
  {
    
      age=26;
   
    
    printMygender = ()=> {
      console.log(this.age);
    }
  }


class Person extends Human
{
  
    name='Swati';
  
  
  printMyname =()=>{
    console.log(this.name);
  }

}

const person= new Person();
person.printMyname();
person.printMygender();

//Classes with arrow functions

class Human
  {
    
      age=26;
   
    
    printMygender = ()=> {
      console.log(this.age);
    }
  }


class Person extends Human
{
  
    name='Swati';
  
  
  printMyname =()=>{
    console.log(this.name);
  }

}

const person= new Person();
person.printMyname();
person.printMygender();

//Sample Arrow Functions

const printMyName=(name)=>
{
  console.log(name);
}

printMyName('Max');

//usage of const keyword

const myName='Swati';
console.log(myName);

myName='Priya';
console.log(myName);

//usage of let keyword

let myName='Swati';
console.log(myName);

myName='Priya';
console.log(myName);

