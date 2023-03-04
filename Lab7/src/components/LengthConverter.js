import React from 'react'



//using props
function LengthConverter(props) {

    const LengthConverter=props =>{
        const {Lengthconverter}=props   //using destructuring
    }


    let num = 9;
    let num2 = 12;

    let inches = num * 39.370;
    let inches1 = num2 * 39.370;
    
    return (
        <div>

            <h2> LengthConverter :{props.LengthConverter}={inches1}</h2>
            
            <h2> LengthConverter :{LengthConverter}={inches}</h2>
            


        </div>
    )
}

export default LengthConverter;