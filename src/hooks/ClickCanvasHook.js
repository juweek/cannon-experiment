import { useState, useEffect, useRef } from 'react';

// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 10;
export const canvasWidth = window.innerWidth * .2;
export const canvasHeight = window.innerHeight * .2;


/*
============
DRAW CLICK EVENT: create a draw function
1. clear the current canvas with clearRect
2. begin a new Path; this is how you signal to the canvas that you are going to draw something
3. draw a circle with arc. use a dynamic variable (in this case, frameCount) to make the drawing animated
4. define what to draw; either fill or stroke
============
*/ 
export function draw(ctx, location){
  console.log("attempting to draw")
  ctx.fillStyle = 'cornsilk';
  ctx.shadowColor = 'BLACK';
  ctx.shadowBlur = 10;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  console.log(location.x)
  console.log(location.y)
  ctx.translate(location.x / SCALE - OFFSET, location.y);
  //the rotate code on the following line would be good to randomize for the beard thing
  ctx.rotate(225 * Math.PI / 180);
  ctx.fill(SVG_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();  
};

export default function useClickableCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}

