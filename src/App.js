import React from "react";
import "./App.css";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Post from "./components/Post";



function App() {
  return (
    <div className="app">
      {/* header section:- i used here material ui for the icons */}
      <div className="app_header">
        <img
          className="app__headerImgae"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          height="45px"
          alt="Logo"
        />

        <div>
          <HomeIcon className="home"/>
          <AddBoxOutlinedIcon className="btn_plus"/>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>

      <Post />
      
     
    </div>
  );
}

export default App;
