let wm = new WeakMap();  
let name = {};  
let acctype= {};  
let bal= {};  
let doc={};
let bname={};
let brname={};
//set(addsand updates)
wm.set(name, 'Amy');  
wm.set(acctype, 'Savings');  
wm.set(bal,5000);  
wm.set(doc, '31-6-20');
wm.set(bname,'sbi');  
wm.set(brname,'hassan');


//get()returns  values
console.log(wm.get(name));  
console.log(wm.get(acctype));  
console.log(wm.get(bal));
console.log(wm.get(doc));

console.log(wm.get(bname));

console.log(wm.get(brname));  


//has(specified values)
console.log(wm.has(bal));  



console.log("Element present before invoking delete() method: "+ wm.has(doc));  
wm.delete(doc);  
console.log("Element present after invoking delete() method: "+wm.has(doc)); 
