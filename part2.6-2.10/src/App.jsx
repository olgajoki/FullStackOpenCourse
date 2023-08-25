//phonebook 2.6

import { useState } from 'react'
import Person from './components/Person.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log(persons)
//alert works but person still added to table
    persons.map(person => {
      if(person.name.includes(newName)){
        alert(`${newName} is already added to phonebook`)
        
      }
      else{
        console.log('elses')
 
      }
    })

    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')  
  }
  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
           value={newName}
           onChange={handleNameChange}
           />
        </div>
        <div>
          <button type="submit">add
          </button>
          {persons.map(person =>
            <Person key={person.id} person={person} />
            )}
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )

}

export default App