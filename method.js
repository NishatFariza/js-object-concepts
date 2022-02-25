const student ={
    id: 101,
    name: 'Hamim',
    major: 'Math',
    money: 5000,
    isRish:false,
    subject: ['Math', 'English', 'Economics', 'Math 1'],
    bestFriend: {
        name:'Kumu',
        major:'Math'
    },
     takeExam: function (){
        console.log(this.name, 'Taking exam');
    },
    treatDay: function (expense, boksish){
       this.money =this.money - expense -boksish;
       return this.money;
    }
}
student.takeExam()
const remaning1 = student.treatDay(700, 100);
const remaning2 = student.treatDay(500, 50);
console.log(remaning2)