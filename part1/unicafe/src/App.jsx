import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick} >
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good+neutral+bad
  const promedio = (good-bad)/all
  const positivas = (good*100)/all
  
  if (all === 0) return <div> No feedback given </div>
  
  return (
    <div>
      <div> good {good} </div>
      <div> neutral {neutral} </div>
      <div> bad {bad} </div>
      <div> all {all} </div>
      <div> average {promedio} </div>
      <div> positive {positivas} % </div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App