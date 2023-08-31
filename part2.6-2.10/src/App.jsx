//phonebook 2.6-2.13

import { useState, useEffect } from "react";
import Person from "./components/Person.jsx";
import personService from "./services/persons.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  //get persons from server
  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.log("fail");
      });
  }, []);

  //add person info to server
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

    personService.create(nameObject).then((returnedPerson) => {
      console.log(returnedPerson);
      console.log(persons);
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
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
