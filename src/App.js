import './App.css';
import RequestNewPEA from './components/RequestNewPEA';

function App() {
  return (
    <div className="App">
      <div className='box'>
        <form>
          <h1>ขอเพิ่มอุปกรณ์DTM</h1>
          <RequestNewPEA/>
        </form>
      </div>
    </div>
  );
}

export default App;
