import './App.css';
import Main from './Component/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Movie from './Component/Movie';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Router>
      <Main></Main>

      <Routes>    

          <Route path="movies/:type" element={<Movie />}></Route>
     </Routes>
</Router>
    </div>
  );
}

export default App;
