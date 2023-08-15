import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resources from './components/Resources';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resources/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
