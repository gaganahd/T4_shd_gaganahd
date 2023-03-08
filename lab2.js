
const listofBanks=[
  {
  name:"nimi",
  account:"savings",
  bal:4000,
  Doc:24-4-2020,
  bankname:"SBI",
  branchcode:"banglore",
  pannum:"gfhgc654"
  
  
  
  
  },
  {
  
    name:"Avi",
    account:"savings",
    bal:4000,
    Doc:24-9-2022,
    bankname:"HDFC",
    branchcode:"banglore",
    pannum:"hghvv675g"
    },
  
  {
  name:"Vini",
  account:"savings",
  bal:5000,
  Doc:07-9-2020,
  bankname:"ICIC",
  branchcode:"Hyderabad",
  pannum:"kjhu65j"
  }
  
  
  ]
  const banks=listofBanks.filter(account=>account.bal>200);
  console.log(banks);
  
  
  listofBanks.forEach((account)=>{
    const serviceFee=account.bal*0.1;
    account.bal=account.bal - serviceFee;
  });
  console.log(listofBanks);
  
  const result=listofBanks.filter((account)=>{
    return account.bal>200 && account.branchcode=="Hyderabad";
  });
  console.log(result);
  const newBank={
  
    name:"megha",
    account:"savings",
    bal:500,
    Doc:18-6-2020,
    bankname:"SBI",
    branchcode:"Chennai",
    pannum:"nxcv675r"
    
  
  
  
  
  }
  
  listofBanks.push(newBank);
  console.log(listofBanks);
  listofBanks.splice(4);
  console.log(listofBanks);
  var result1=0;
  listofBanks.forEach((account)=>{
    return result1+=account.bal;
  
  });
  console.log(listofBanks);
  console.log(result1);














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

