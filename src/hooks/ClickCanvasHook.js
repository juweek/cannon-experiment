import { useState, useEffect, useRef } from 'react';



export default function useClickableCanvas(draw){
  
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);


    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, window.innerWidth * .2, window.innerHeight * .2 );

        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, canvasRef, window.innerWidth * .2, window.innerHeight * .1 ];
}

