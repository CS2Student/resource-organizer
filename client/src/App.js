import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resources from './components/Resources';
import AddResourceForm from './components/AddResourceForm';
import UpdateResourceForm from './components/UpdateResourceForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resources />} />
          <Route path="/add" element={<AddResourceForm />} />
          <Route path="/update/:id" element={<UpdateResourceForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
