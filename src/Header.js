import React from "react";
import "./Header.css";
import HeaderItem from "./components/HeaderItem";
import Menubar from "./headers/Menubar";
import Logo from "./headers/Logo";
import Profile from "./headers/Profile";
import DropdownMenu from "./components/DropdownMenu";
import SeachBox from "./headers/SearchBox";
import UploadVideo from "./headers/UploadVideo";
import VoiceSearch from "./headers/VoiceSearch";
import YoutubeApps from "./headers/YoutubeApps";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  InputGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Searchlist from "./pages/Searchlist";
import { useState } from "react";

// import axios from "./API/axios";
function Header() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchData, setSearchData] = useState("");

  const handleSearchInputChange = (event) => {
    const userInput = event.target.value;
    setSearchData(userInput);
    setShowSuggestions(userInput.length > 0);
    // console.log("flaG:", userInput.length);
  };
  console.log(showSuggestions);

  const clearSearchValue = () => {
    setSearchData("");
  };
  const searchStyle = {
    bg: "#0F0617",
    color: "white",
    width: "220px",
    height: "35px",
    pl: "40px",
    border: "1px solid grey",
    borderRadius: "5px",
  };

  function profileClickhandler() {}

  return (
    <div className="header">
      <div className="menubar">
        <Menubar />
      </div>

      <div className="logo">
        <a href="#">
          <Link to={"/"}>
            {/* <Logo /> */}
            <img
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
              alt=""
            />
          </Link>
        </a>
      </div>
      {/* </div> */}

      {/* <div className="header-middle-items d-flex align-items-center"> */}
      <div className="input-box ">
        {/* <Link to="/searchlist"> */}
        <InputGroup>
          <input
            value={searchData}
            onChange={handleSearchInputChange}
            type="text"
            className="search-box"
            placeholder="Search"
            sx={searchStyle}
          />
          {showSuggestions && (
            <Searchlist
              searchData={searchData}
              clearSearchValue={clearSearchValue}
            />
          )}
          {console.log(searchData)}
          <div className="search-box absolute d-flex align-items-center justify-content-center">
            <SeachBox />
          </div>
        </InputGroup>
        {/* </Link> */}
      </div>
      <Link to={"/comingsoon"}>
        <div className="voice-search d-flex align-items-center">
          <VoiceSearch />
        </div>
      </Link>
      {/* </div> */}

      {/* <div className="upload-video d-flex"> */}
      <Link to={"/comingsoon"}>
        <div className="create-options">
          <UploadVideo />
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        {" "}
        <div className="youtube-apps">
          <YoutubeApps />
        </div>
      </Link>

      <div className="profile-menu">
        <div className="profile-img">
          {/* <Profile /> */}
          <DropdownMenu profile={<Profile />} />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
export default Header;
