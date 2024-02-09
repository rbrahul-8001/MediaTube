import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Videodetail from "./components/Videodetail";
import Channeldetail from "./components/Channeldetail";
import Searchfeed from "./components/Searchfeed";


function App() {
  return (
    <div className=" bg-black">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path='/video/:id' element={<Videodetail/>}/>
      <Route path='/channel/:id' element={<Channeldetail/>}/>
      <Route path='/search/:searchterm' element={<Searchfeed/>}/>
    </Routes>
    </div>
  );
}

export default App;
