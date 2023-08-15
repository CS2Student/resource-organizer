import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resources from './components/Resources';
import AddResourceForm from './components/AddResourceForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resources />} />
          <Route path="/add" element={<AddResourceForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
