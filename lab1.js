let customer={
    name:"harshitha",
    acctype:"savings",
    balance:"5000",
    Doc:"31-05-2021",
    bname:"SBI",
    brname:"rajajinagar",
    pannumber:"jgf654jh"


};
for (const [key, value] of Object.entries(customer)) {
    console.log(`${key}: ${value}`);
  }
  // check if key exists
const hashKey = 'name' in customer;

if(hashKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}

//get values for the key

let values = Object.values(customer);
values; 

console.log(customer["name"]);
console.log(customer["acctype"]);
console.log(customer.balance);
console.log(customer["Doc"]);
console.log(customer["bname"]);
console.log(customer["brname"]);
console.log(customer["pannumber"]);

  