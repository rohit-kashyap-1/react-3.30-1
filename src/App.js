import logo from './logo.svg';
import './App.css';
import Link from './Link';
function App() {
  return (
    <div className="App">
      <nav>
        <Link title="React Home" url="https://react.dev/url" id="1" />
        <Link title="Documentation" url="https://react.dev/docs" id="2" />
        <Link title="Pricing" url="https://react.dev/pricing" id="3" />
       
      </nav>
    </div>
  );
}


export default App;
