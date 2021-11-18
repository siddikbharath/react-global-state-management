import logo from './logo.svg';
import './App.css';
import List from './components/list';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <List />
        <Form />
      </header>
    </div>
  );
}

export default App;
