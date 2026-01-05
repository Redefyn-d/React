import List from './List.jsx'

function App() {
  const fruits = [{id : 1 , name : "Apple", cal : 20},{id : 2 , name : "Orange" , cal : 30},{id: 3 , name : "Bannana", cal : 40}];
  return (
  <>
    <List Items = {fruits} Category = "Fruits"/>
  </>
  );
}

export default App
