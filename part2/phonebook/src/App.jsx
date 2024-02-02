import { useState } from 'react'

const App = () => {
  const [newName, setNewName] = useState('new name...')
  const [newNumber, setNewNumber] = useState('new number...')
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '1234-5678'
    },
    {
      name: 'Ada Lovelace',
      number: '8765-4321'
    }
  ])

  const addName = (event) => {
    event.preventDefault()

    if (persons.every((elem) => elem.name !== newName)) {
      const nameObject = { name: newName, number: newNumber}
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
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

      <ul>
        {persons.map(person => <li key={person.name}> {person.name} {person.number} </li>)}
      </ul>

    </div>
  )
}

export default App