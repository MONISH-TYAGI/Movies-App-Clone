import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
//Hello
import {BrowserRouter as Router,Routes,Route,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <Router>
   <Navbar/>
   {/* <Banner/>
   <Movies/> */}
   <Routes>
   <Route path='/' element={[<Banner/>,<Movies/>]}/>
    {/* <Route  exact path='/' render={(props)=>(
      <>
      <Banner {...props}/>
      <Movies {...props}/>
      </>
    )}/> */}
    <Route path='/favourites' element={<Favourite/>}/>
   </Routes>
   {/* <Favourite/> */}
   </Router>
  );
}

export default App;
