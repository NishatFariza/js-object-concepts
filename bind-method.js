const kibria ={
    id: 101,
    name: 'Hamim',
    money: 500,
    treatDay: function (expense, boksish){
       this.money =this.money - expense -boksish;
       console.log(this);
       return this.money;
    }
}

const heroBalam ={
    id:102,
    name: 'Balam',
    money: 6000,
}
kibria.treatDay(100)
const heroTreatDay = kibria.treatDay.bind(heroBalam)
console.log(heroBalam)
