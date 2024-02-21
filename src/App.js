

import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage';

import { Routes,Route } from 'react-router-dom';
import EditMemesPage from './Pages/EditPage';
function App() {
  return (
    <div className="App">
      <h1>Memes App</h1>
      <Routes >
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/edit/' element={<EditMemesPage></EditMemesPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
