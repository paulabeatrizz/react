import './App.css';
import { Person } from './Person';


function App() {
  return (
    <div className="App">
        <Person
          name="Paula"
          email="paula@gmail.com"
          age={20}
          isMarried={false}
          friends={["snoopy", "woodstcock", "linus"]}
        />
    </div>
  );
}

export default App;
