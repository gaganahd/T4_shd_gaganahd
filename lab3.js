//Rounded values

console.log(Math.round (0.9));
console.log(Math.round (8.4));
console.log(Math.round (5.5));
console.log(Math.round(-7.25));

//area of a circle

let pi = 3.14;
 // Function to calculate the area of circle 
    function findArea(r) {
         return (pi * r * r);

    }
 let r, Area;
 r=20;
    
    // Function calling 
    Area = findArea(r);
 
    // displaying the area 

    console.log("Area of Circle is: " + Area);

    //math sin() method
    console.log("calculation of sin :")
    console.log("Result : "+ Math.sin(0)); // o as para
    console.log("Result : "+ Math.sin(1));  // 1 as para
    console.log("Result : " + Math.sin(Math.PI / 2));   //pi as par
    //for cos()
    console.log("calculation of cos:")
    console.log("Result : "+ Math.cos(1));
    
    console.log("Result : " + Math.cos(010));
    console.log("Result : " + Math.cos(Math.PI));

    //for Tan
    console.log("calculation of tan :")

    console.log("Result : "+ Math.tan(0)); // o as para
    console.log("Result : "+ Math.tan(1)); 
    console.log("Result : " + Math.tan(Math.PI / 6));

   // perimeter of rectangle

   function POR(length, width) {
    
    var perimeter = length + length + width + width;
    return perimeter;
  }
  
  var Result= POR(7, 4);
  console.log("perimeter of rectangle is : "+Result);




  


  //employ arrw functions
  
  let age = 25;

  let welcome = (age < 18) ?
    () => console.log('Baby') :
    () => console.log('Adult');
  
  welcome(); 
//employ hoc
  const num1 = 24;
  const num2 = 5;
  const productHOC = num1 => {
     return product = num2 => {
        return num1 * num2;
     };
  };
  console.log(productHOC(num1)(num2));let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1);
