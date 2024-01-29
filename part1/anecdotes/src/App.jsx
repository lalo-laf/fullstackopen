import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotedIndex, setMostVoted] = useState(0)

  const handleNext = () => {      //actualiza el indice selected
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVote = () => {      //actualiza el array de votos y el indice del mas votado, si corresponde
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
    if (copy[selected] > copy[mostVotedIndex]) {setMostVoted(selected)}
  }

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p> {anecdotes[selected]} </p>
      <p> has {votes[selected]} votes </p>

      <button onClick={handleVote}> vote </button>
      <button onClick={handleNext}> next anecdote </button>

      <h1> Anecdote with most votes </h1>
      <p> {anecdotes[mostVotedIndex]} </p>
      <p> has {votes[mostVotedIndex]} votes </p>
    </div>
  )
}

export default App