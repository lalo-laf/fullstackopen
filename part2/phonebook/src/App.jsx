import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' },{ name: 'Ada Lovelace' }]) 
  const [newName, setNewName] = useState('new name...')

  const addName = (event) => {
    event.preventDefault()
    console.log("submit clickeado", event.target)    //para testing
    const nameObject = { name: newName }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)   //para testing
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {persons.map(person => <li key={person.name}> {person.name} </li>)}
      </ul>

    </div>
  )
}

export default App