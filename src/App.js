import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/main-layout';
import { Folowing } from './pages/following/folowing';
import { Folowers } from './pages/folowers/folowers';
import Owerview from './pages/owerview/owerview';
import { Pakgaje } from './pages/pakgase/pakgaje';
import { Projects } from './pages/projects/projects';
import { Reposite } from './pages/reposite/reposite';
import { Stars } from './pages/stars/stars';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Owerview/>} />
      <Route path='/reposite' element={<Reposite/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/pakges' element={<Pakgaje/>} />
      <Route path='/stars' element={<Stars/>} />
      <Route path='/following' element={<Folowing/>}/>
      <Route path='/followers' element={<Folowers/>}/>
      </Route>
    </Routes>
  );
}

export default App;
