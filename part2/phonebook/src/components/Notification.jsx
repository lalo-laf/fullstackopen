const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div style={{color: "green", fontSize: 20, marginBottom: 10}} className="error">
      {message}
    </div>
  )
}

export default Notification