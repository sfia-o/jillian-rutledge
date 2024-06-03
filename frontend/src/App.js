import React, { useEffect, useState } from 'react'

function App() {

  const [userData, setUserData] = useState({users: []});

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setUserData(data)
      }
    )
  }, []);

  console.log(userData);

  return (
    <div>
      {
        userData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      }
    </div>
  )
}

export default App;
