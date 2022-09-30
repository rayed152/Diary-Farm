import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cow from './Forms/Cow';
import Cow_info from './infos/Cow_info';
import Calf_info from './infos/Calf_info';
import Sheep_info from './infos/Sheep_info';
import Allanimals from './infos/Allanimals';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path= "/cow-form" element={<Cow />} />
          <Route path= "/cow-info" element={<Cow_info />} />
          <Route path= "/calf-info" element={<Calf_info />} />
          <Route path= "/sheep-info" element={<Sheep_info />} />
          <Route path= "/allanimal-info" element={<Allanimals />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
