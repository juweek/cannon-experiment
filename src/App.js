import Canvas from './components/Canvas'
import Clickable from './components/ClickableCanvas'
import Forest from './components/Forest'
import './styles/bro.scss';


function App() {

/*
============
DRAW CIRCLE: create a draw function
1. clear the current canvas with clearRect
2. begin a new Path; this is how you signal to the canvas that you are going to draw something
3. draw a circle with arc. use a dynamic variable (in this case, frameCount) to make the drawing animated
4. define what to draw; either fill or stroke
============
*/ 
  const drawCircle = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.stroke()
  }

  /*
============
DRAW SQUARE: create a draw function
1. clear the current canvas with clearRect
2. begin a new Path; this is how you signal to the canvas that you are going to draw something
3. draw a circle with arc. use a dynamic variable (in this case, frameCount) to make the drawing animated
4. define what to draw; either fill or stroke
============
*/ 
  const drawSquare = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath()
    ctx.rect(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 4*Math.PI)
    ctx.stroke()
  }


/*
============
RETURN THE APP
1.  Create a Canvas element for each of the 
============
*/ 

  return (
    <div className="container">
      <Canvas draw={drawCircle}/>
      <Canvas draw={drawSquare}/>
      <Clickable />
      <Forest />
    </div>
  );
}

export default App;
