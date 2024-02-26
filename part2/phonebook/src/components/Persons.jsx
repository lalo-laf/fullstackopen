import PersonDetails from './PersonDetails'

const Persons = ({ persons, deletePerson }) => (
  <ul>
    {persons.map(person => 
      <PersonDetails key={person.name} person={person} deletePerson={() => deletePerson(person.id)} />
    )}
  </ul>
)

export default Persons