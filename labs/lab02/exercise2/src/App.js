import Hello from './components/Hello'
import User from './components/User'

function App() {
  return (
    <div className="App">
      <Hello name="World">

      </Hello>
      <Hello title="Mr." name="React">

      </Hello>

      <User firstName="John" lastName="Doe"></User>
    </div>
  );
}

export default App;
