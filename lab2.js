let customer= {name:"Harshitha",acctype:"Savings",bal:"5000",Doc:"31-04-2021",bname:"SBI",brname:"chennai",pannumber:"jhr54jh5"};

   
     
      

console.log(customer);

if(customer.bal>200)
{
  console.log(customer.bname);
}
  else{

  console.log("insufficient balance");
}


if(customer.bal>200  && customer.brname=="chennai")
{
  console.log(customer.bname);
}




customer.bank="axis";
console.log(customer);

