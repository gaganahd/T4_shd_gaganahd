let customer= ['ram', 'sham', 'rana'];
let Account = ['50000', '12000', '123876'];

      //Merging arrays using (...) spread operator
       join= [...customer, ...Account];
   
     
      //New array after merging
      console.log(join); 

      //2.

     

      //functions of spread argument
      
      function sum(x, y, z) {
            return x + y + z;
          }
          
          const numbers = [50000, 12000, 123876];
          
          console.log(sum(...numbers));

          
      
          


