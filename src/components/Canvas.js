import React from 'react'
import useCanvas from '../hooks/CanvasHook'

/*
============
Write out the component itself. 
1. Take the props in. the props will be the draw function, whatever you decide to make it
2. call the useCanvas hook. this hook will be the thing that redraws the page every x seconds
3. return the canvas component, with the useCanvas hook calculating the ref (basically, parameter)
============
*/ 

const Canvas = props => {

    const { draw, ...rest } = props
    const canvasRef = useCanvas(draw)
    
    return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas
