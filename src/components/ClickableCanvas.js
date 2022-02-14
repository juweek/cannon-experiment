import React from 'react'
import useClickableCanvas from '../hooks/ClickCanvasHook'


/*
============
Not needed right now, but will be
============
  const handleClearCanvas=(event)=>{
    setCoordinates([]);
  };
*/

  

const Clickable = props => {

    const { ...rest } = props

    /*
    ============
    Write out the component itself. 
    1. Take the props in. the props will be the draw function, whatever you decide to make it
    2. call the useCanvas hook. this hook will be the thing that redraws the page every x seconds
    3. return the canvas component, with the useCanvas hook calculating the ref (basically, parameter)
    ============
    */ 
    const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useClickableCanvas();

    const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord]);
    };
    
    return <canvas 
    ref={canvasRef} 
    className="App-canvas"
    onClick={handleCanvasClick} 
    width={canvasWidth}
    height={canvasHeight}
    {...rest} />
}

export default Clickable
