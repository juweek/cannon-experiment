import { useEffect, useRef } from 'react'

/*
============
Write out the component itself
============
*/ 

const Canvas = props => {

    const canvasRef = useRef(null)

/*
============
create a draw function
1. clear the current canvas with clearRect
2. begin a new Path; this is how you signal to the canvas that you are going to draw something
3. draw a circle with arc. use a dynamic variable (in this case, frameCount) to make the drawing animated
4. define what to draw; either fill or stroke
============
*/ 
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.stroke()
      }
 
 /*
============
write out the useeffect hook. get this 2D context using canvas api, then call the draw function everytime the use effect is called
============
*/ 
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

    
    return <canvas ref={canvasRef} {...props}/>
}


/*
============
Write out specific styles in case of dynamic styling
============
*/


export default Canvas
