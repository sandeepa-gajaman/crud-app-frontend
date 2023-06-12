import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Schools from "./pages/Schools";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path={'schools'} element={<Schools/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
