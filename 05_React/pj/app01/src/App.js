import logo from './logo.svg';
import './App.css';
import './components/MyTick'

function App() {
  console.log("App 컴포넌트");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <MyTick />
    </div>
  );
}

export default App;
