/* conditional rendering = allows you to control what gets 
                           rendered in you application
                           based on certain conditions 
                           (show, hide or change components) */

import UserGreeting from './UserGreeting.jsx'
function App() {
  

  return (
    <>
      <UserGreeting isLoggedIn={false} username="dude"/>
    </>
  )
}

export default App
