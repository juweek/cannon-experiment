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
DRAW CLICK EVENT: create a draw function
1. clear the current canvas with clearRect
2. begin a new Path; this is how you signal to the canvas that you are going to draw something
3. draw a circle with arc. use a dynamic variable (in this case, frameCount) to make the drawing animated
4. define what to draw; either fill or stroke
============
*/ 
const drawClick = (ctx, location) => {
  // Path2D for a Heart SVG
  const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
  const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
  const SCALE = 0.1;
  const OFFSET = 10;
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
      <Clickable draw={drawClick}/>
      <Forest />
    </div>
  );
}

export default App;
