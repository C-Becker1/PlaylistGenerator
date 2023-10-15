import './App.css'

import User from "@shared/User"

function App() {
  const user: User = {
    Id: 1,
    UserName: "bekker",
    Name: "Sebastán",
    LastName: "Rojas Guerra",
    profilePicturePath: "/",
  }

  return (
    <>
      {user.Id}
      {user.Name}
      {user.LastName}
    </>
  )
}

export default App
