import React from "react";
function ArrayCon({met =3,F=7,m=6,cm=5}){
    
    const mettoinc=met*39.3701;
    const FtoC=(F-32)/1.8;
    const mettokm=m/1.6093;
    const cmtome=cm*10;
    return(
        <div>ArrayCon
                <h2>{met} meter = {mettoinc} inches</h2>
                <h2>{F} Fahrenhite = {FtoC} celcius</h2>
                <h2>{m}miles={mettokm}km</h2>
                <h2>{cm}centimeter={cmtome}mm</h2>





        </div>
    )
    }

export default ArrayCon;
