import { useState } from 'react'

/*
============
Write out the component itself
============
*/
const Button = () => {
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
