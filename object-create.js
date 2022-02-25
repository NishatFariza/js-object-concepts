//using literal
const student ={name:'Sakib-al-Hasan', job:'crckter'}

//using constractor
const person =new Object();

//3
const human = object.create(student);
console.log(human.job);

//4. null object
const huma =object.create(null);

//5. creating object from class
class People {
    constructor(name){
        this.name = name;
        this.age =age;
    }
}
const peop =new People('manush', 12);
console.log(peop);

//5. syntactically sugar
function Manus (name){
    this.name =name;
}
const man =new Manus('Kader')
console.log(man);