import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [newName, setNewName] = useState('new name...')
  const [newNumber, setNewNumber] = useState('new number...')
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }, [])

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    if (persons.every((elem) => elem.name !== newName)) {
      const personObject = { name: newName, number: newNumber}
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotificationMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 4000)
        })
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personObject = persons.find(p => p.name === newName)
        const changedObject = { ...personObject, number: newNumber}
        personService
          .update(personObject.id, changedObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personObject.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setNotificationMessage(`${returnedPerson.name}'s number was changed`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 4000)
          })
      }
    }
  }

  const deletePerson = (id) => {
    if (window.confirm("borrar?")) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(n => n.id !== id))
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage} />

      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App