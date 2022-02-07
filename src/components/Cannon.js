import { useState } from 'react'

/*
============
Write out the component itself
============
*/
const Cannon = () => {
    //create a particle object and define whichever variables you will need

    let particle
    particle.angle, particle.velocity, particle.decay = 0
    particle.x += Math.cos(particle.angle) * particle.velocity;
    particle.y += Math.sin(particle.angle) * particle.velocity + particle.gravity;
    particle.velocity *= particle.decay;



    const [firstName, setFirstName] = useState("Billy")
  
    let handleButtonChange = (e) => {
        setFirstName(e.target.value)
      }

    return (
        <div>
            <h1>Hello {firstName} </h1>
            <button onClick={handleButtonChange} value="Option 1">Option 1</button>
            <button onClick={handleButtonChange} value="Option 2">Option 2</button>
            <button onClick={handleButtonChange} value="Option 3">Option 3</button>
        </div>
    )
}

/*
============
Write out default Props in case something fails
============
*/


/*
============
Write out specific styles in case of dynamic styling
============
*/
const classStyles = {
    color: 'red'
}

export default Button
