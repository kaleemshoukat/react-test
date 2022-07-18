import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import LiveWidth from './components/LiveWidth'

function App() {
    let divHeight;
    window.setDivHeight = (height) => {
        divHeight = height
        document.getElementById('wrap').style.height=height+'px'
    }

    return (
    <div className="App">
      <div className="container">
        <LiveWidth />
      </div>
    </div>
  );
}

export default App;
