import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Post from "./components/Post";
import Gallery from "./components/Gallery";
import ToDo from "./components/ToDo";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/todo" element={<ToDo />}/>
      </Routes>
    </div>
  );
}

export default App;
