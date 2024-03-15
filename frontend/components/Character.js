import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
 const [homeworld, setHomeShow] = useState(false)
 
 
  const toggleShow = () => {
    setHomeShow(!homeworld)
  }

 console.log(props.p.name)
 return (
    
      
         <div  onClick= {toggleShow} className= "character-card" key= {props.p.id}>
          <h3   className= 'character-name'key={props.p.id}>
            {props.p.name}</h3>
            
            {homeworld && <p key= {props.p.id}>Planet: <span className="character-planet">{props.p.homeworld.name}</span></p>}
           
          </div>

 
  )
}

export default Character
