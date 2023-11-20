
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Page from './pages/Page';
import Watch from './pages/Watch';
import LoginSignup from './components/LoginSignup';
import Register from './components/Register';
import SearchResult from './pages/SearchResult'
import Premium from './pages/Premium';
// import Searchlist from './pages/Searchlist';
import PremiumSub from './pages/PremiumSub';
import ComingSoon from './pages/ComingSoon';
import  Password  from './pages/Password';
import Watchlist from './pages/Watchlist';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Header/>
      <Sidebar />
          
      <div className="main-display" 
      // style={{"display" : "flex"}}
      >
        <Routes>
          <Route path='/' element={<>
          {/* <Sidebar /> */}
          <Videos />
          </>} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path='newpage' element={<Page/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/result/:id" element={<SearchResult />} />
          {/* <Route path="/searchlist" element={<Searchlist/>}/> */}
          <Route path='/premium'
          element={<Premium />}/>
          
          <Route path='/premiumsub'
          element={<PremiumSub />}/>
          
          <Route path='/comingsoon'
          element={<ComingSoon />}/>

          <Route path='/password'
          element={<Password />}/>
         
          <Route path='/watchlist'
          element={<Watchlist />}/>
          
        </Routes>
      
      </div>
      </BrowserRouter>
       
    </div>
  );
  
}

export default App;
