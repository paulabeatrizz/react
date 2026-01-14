 import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={90000} positon="Senior SDE" company="Amazon" />
      <Job salary={12000} positon="Juniro SDE" company="Google" />
      <Job salary={10000} positon="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.positon}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;
