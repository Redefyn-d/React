import UserGreeting from "./UserGreeting.jsx"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn = {true} username = "lokesh"/>
      <UserGreeting/>
    </>
  );
}

export default App
