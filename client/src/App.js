import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resources from './pages/Resources';
import AddResourceForm from './pages/AddResourceForm';
import UpdateResourceForm from './pages/UpdateResourceForm';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resources />} />
          <Route path="/add" element={<AddResourceForm />} />
          <Route path="/update/:id" element={<UpdateResourceForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
