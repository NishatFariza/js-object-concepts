const kibria ={
    id: 101,
    name: 'Hamim',
    money: 5000,
    treatDay: function (expense, boksish, tax){
       this.money =this.money - expense -boksish -tax;
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
kibria.treatDay.call(heroBalam, 700, 70)

