import PersonDetails from './PersonDetails'

const Persons = ({ persons }) => (
  <ul>
    {persons.map(person => 
      <PersonDetails key={person.name} person={person} />
    )}
  </ul>
)

export default Persons