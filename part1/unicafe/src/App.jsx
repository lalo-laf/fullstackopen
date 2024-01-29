import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick} >
    {props.text}
  </button>
)

const Statistics = (props) => <div> {props.text} {props.value} {props.text=="positive"?"%":""} </div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+neutral+bad
  const promedio = (good-bad)/all
  const positivas = (good*100)/all

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />

      <h1>statistics</h1>

      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={promedio} />
      <Statistics text="positive" value={positivas} />
    </div>
  )
}

export default App