import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  
  useEffect(() => {
     function getPeople(){
      axios.get(urlPeople)
      .then(res => {
        const people = res.data
        setPeople(people)
        console.log(people)
      }) 
      .catch(err => {
        console.log(err.message)
      })
     }
    getPeople()
  }, [])

  useEffect(() => {
    function getPlanets(){
     axios.get(urlPlanets)
     .then(res => {
       const planets = res.data
       console.log(planets)
       setPlanets(planets)
     }) 
     .catch(err => {
       console.log(err.message)
     })
    }
   getPlanets()
 }, [])

 let eachPerson = []
 let eachPlanet = []
 let i = 0
 people.forEach(p => {
  const { homeworld, name, id } = p
  
  eachPerson[i] = {id, homeworld , name }
  i++
 })

 planets.forEach(p => {
  const { name, id } = p
  
 eachPlanet[id] = {name}
 
 })

eachPerson.forEach(p => {
  p.homeworld = eachPlanet[p.homeworld]
})
 console.log(eachPerson)
 

 
    //combine data
 //pass data to the child component
 //in child component build card

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      <>
      {
        eachPerson.map(p => <Character p = {p} key= {p.id}/>)
      }
      </>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
