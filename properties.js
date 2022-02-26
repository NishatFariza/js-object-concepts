const bottle ={color: 'Yellow', hold: 'water', price: 50, isClean: true};

//getting all properties name
const keys =Object.keys(bottle);
console.log(keys)

//getting all values
const values =Object.values(bottle);
console.log(values)

//object seal
// Object.seal(bottle)
// console.log(bottle)

//object freeze
Object.freeze(bottle)
console.log(bottle)

//delete any property
delete bottle.isClean;
console.log(bottle)

