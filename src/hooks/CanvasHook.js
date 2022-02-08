import { useEffect, useRef } from 'react'

const useCanvas = draw => {
    
    const canvasRef = useRef(null)
/*
============
the useEffect hook
1. get the 2D context using canvas api
2. call the render function, which calls the draw function up above
3. recursively call the function using requestAnimationFrame; this keeps it on a loop
4. define what to draw; either fill or stroke
============
*/ 
    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        
        //Our draw came here. the requestAnimatedFrame function
        const render = () => {
          frameCount++
          draw(context, frameCount)
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
      }, [draw])
    
    return canvasRef
}

export default useCanvas
