const bottle ={color: 'Yellow', hold: 'water', price: 50, isClean: true};

for (const prop in bottle){
    // console.log(prop, bottle[prop])
}

// const keys =Object.keys(bottle);
// console.log(keys)

//  for (const prop of keys){
    //  console.log(prop, bottle[prop])
//  }

 //advanced object in
 const entries =Object.entries(bottle)
 console.log(entries)
 const [keys, values] =['color', 'Yellow']
 for (const [keys, values] of Object.entries(bottle)){
           console.log(keys, values)
 }

 //
 const arr =['color', 'jeans', 'tom'];
 arr[0]