import Canvas from './components/Canvas'
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
DRAW TREE: create a draw function
1. first, clear the canvas
2. set up a timer that redraws trees for every second, but with a slightly different angle  
3. try to better understand why the trees are going back and forth. it probably has something to do with pie
============
*/ 

const drawTrees = (ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  setInterval(intervalHandler(ctx), 1000);
}

const intervalHandler = (ctx) => {
    var step = 0.0
    ctx.clearRect(0, 0, 465, 465);
    createTree(ctx, 232, 465, 90, 160, 4); //
    createTree(ctx, 232, 465, 60, 120, 3); // 
    createTree(ctx, 232, 465, 120, 120, 3); // 
    step += (Math.PI / 200) % Math.PI;
}

/*
============
* ctx: the 2D drawing context. you need this because you're working with Canvas element
* positionx: the x position of the branch; maybe keep this constant so all roots start at the same place
* positiony: the y position of the branch; maybe keep this constant so all roots start at the same place
* angle: the angle of the the branches. right now, there will always be three: 90deg, 60deg, and 120deg
* length: the length of each of the branches
* n: the number of times to run the recursion; the number of root branches
============
*/ 
const createTree = (ctx, positionx, positiony, angle, length, n) => {
  var toRadian = Math.PI / 180;

  if (n > 0) {
    angle += 3 * Math.cos(step) - 2;
    
    // first, find a new position for the trees? notice how
    var x1 = positionx + 0.1 * length * Math.cos(angle * toRadian);
    var y1 = positiony - 0.1 * length * Math.sin(angle * toRadian);
    
    // あまり伸びない幹
    var x2 = positionx + length * Math.cos(angle * toRadian);
    var y2 = positiony - length * Math.sin(angle * toRadian);
    
    // call the draw line function; this is essentially the branch
    drawLine(ctx, n - 1, positionx, positiony, x2, y2);
    
    var angleLeft = angle + 30;
    var angleRight = angle - 30;
    
    // recursive?
    length = length * 2 / 3;
    createTree(ctx, x2, y2, angle - 3 * Math.sin(step), length, n - 1); // 上方向の幹
    createTree(ctx, x1, y1, angleLeft, length * 2 / 3, n - 1); // 左方向の幹
    createTree(ctx, x1, y1, angleRight, length * 2 / 3, n - 1); // 右方向の幹
    createTree(ctx, x2, y2, angleLeft, length * 2 / 3, n - 1); // 左方向の幹
    createTree(ctx, x2, y2, angleRight, length * 2 / 3, n - 1); // 右方向の幹
}
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
      <Canvas draw={drawTrees}/>
    </div>
  );
}

export default App;
