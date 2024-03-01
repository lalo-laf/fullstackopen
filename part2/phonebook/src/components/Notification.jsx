const Notification = ({ message, state }) => {
  if (message === null) return null
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const successfulStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const notifStyle = state === 'successful' ? successfulStyle : errorStyle

  return (
    <div style={notifStyle} className="error">
      {message}
    </div>
  )
}

export default Notification