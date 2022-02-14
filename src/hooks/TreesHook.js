import { useEffect, useRef } from 'react'


  /*
============
* the function responsible for calling the createTree function over and over again
============
*/
const useForest = () => {

    const canvasRef = useRef(null)
    let step = 0.0

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId

        setInterval(intervalHandler(context), 1000);

        //Our draw comes from here. the requestAnimatedFrame function
        const render = () => {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height)
            setInterval(intervalHandler(context), 1000);
            window.requestAnimationFrame(render)
        }
        render()
        })
   

  /*
============
DRAW LINE: create a draw function
1. clear the current canvas with clearRect
2. begin a new Path; this is how you signal to the canvas that you are going to draw something
3. draw a circle with arc. use a dynamic variable (in this case, frameCount) to make the drawing animated
4. define what to draw; either fill or stroke
============
*/ 
const drawLine = (ctx, n, x1, y1, x2, y2) => {    
    ctx.beginPath();    
    ctx.lineWidth = n > 0 ? n : 1;    
    ctx.strokeStyle = "#333";    
    ctx.moveTo(x1, y1);    
    ctx.lineTo(x2, y2);    
    ctx.stroke();
} 

 /*
============
INTERVAL HANDLER: redraw the tree every time the interval (1000) passes
1. clear the current canvas with clearRect
2. begin a new Path; draw the trees using the recursiveTree, with an explicit (4 or 3) number of branches
3. keep track of the step variable. this is what is used to slightly alter the position of the trees, like the wind
============
*/ 
const intervalHandler = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    createTree(ctx, 132, 135, 100, 50, 4); //
    createTree(ctx, 132, 265, 60, 40, 3); // 
    createTree(ctx, 132, 465, 120, 80, 3); // 
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
      
      // first, find a new position for the trees? notice how the changes are very slight here
      var x1 = positionx + 0.1 * length * Math.cos(angle * toRadian);
      var y1 = positiony - 0.1 * length * Math.sin(angle * toRadian);
      
      // second, find the positions you're moving your branches to
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

    return canvasRef
}

export default useForest
