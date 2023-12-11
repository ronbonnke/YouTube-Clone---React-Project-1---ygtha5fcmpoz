import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Homepage";
import Watch from "./pages/Watch";
import LoginSignup from "./components/LoginSignup";
import Register from "./components/Register";
import Premium from "./pages/Premium";
import PremiumSub from "./pages/PremiumSub";
import ComingSoon from "./pages/ComingSoon";
import Password from "./pages/Password";
import Watchlist from "./pages/Watchlist";
import CurrentPlayingprovider from "./context/CurrentPlayingprovider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CurrentPlayingprovider>
          <Header />
          <div className="main-display">
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Videos />
                    </>
                  }
                />
                <Route path="/watch/:id" element={<Watch />} />
                <Route path="/newpage" element={<Page />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/register" element={<Register />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/premiumsub" element={<PremiumSub />} />
                <Route path="/comingsoon" element={<ComingSoon />} />
                <Route path="/password" element={<Password />} />
                <Route path="/watchlist" element={<Watchlist />} />
              </Routes>
            </div>
          </div>
        </CurrentPlayingprovider>
      </BrowserRouter>
    </div>
  );
}
export default App;
