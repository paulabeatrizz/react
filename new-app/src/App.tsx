import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';


function App() {
  return (
    <div className="App">
        <Person
          name="Paula"
          email="paula@gmail.com"
          age={20}
          isMarried={false}
          friends={["snoopy", "woodstcock", "linus"]}
          country={Country.Brazil}
        />
    </div>
  );
}

export default App;
