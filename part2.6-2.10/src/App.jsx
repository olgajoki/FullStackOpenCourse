//phonebook 2.6

import { useState } from "react";
import Person from "./components/Person.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addInfo = (event) => {
    event.preventDefault();
    //alert works but person still added to table.. maybe filter it or change the persons.map
    persons.map((person) => {
      if (person.name.includes(newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        console.log("elses");
      }
    });

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    //what if these are done on buttons onClick? 
    //then Personform could be moved to own component because sets are not part of addInfo anymore?
    //example for using function as props
    /*
    
  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
  }

  // ...

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
    */
    
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
