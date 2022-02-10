import React from 'react'
import useForest from '../hooks/TreesHook'

/*
============
Write out the component itself. 
1. Take the props in. the props will be the draw function, whatever you decide to make it
2. call the useCanvas hook. this hook will be the thing that redraws the page every x seconds
3. return the canvas component, with the useCanvas hook calculating the ref (basically, parameter)
============
*/ 

const Forest = () => {

    const canvasRef = useForest()
    
    return <canvas ref={canvasRef} />
}

export default Forest
