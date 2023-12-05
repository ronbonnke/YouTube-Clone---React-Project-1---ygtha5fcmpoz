import React from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <div className="filter d-flex align-items-center">
      {/* <div className="single-filter">
        <span className="filter-items pointer active">All</span>
      </div> */}
      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer ">trending</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">drama</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">romance</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">comedy</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">drama</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">action</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">magic</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">mystery</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">fantasy</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">thriller</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">heroic</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">betrayal</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">survival</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">journey</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">sci-fi</span>
        </div>
      </Link>

      <Link to={"/comingsoon"}>
        <div className="single-filter">
          <span className="filter-items pointer">revenege</span>
        </div>
      </Link>

      <div className="single-filter">
        <svg
          viewBox="0 0 16 13"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px" }}
        >
          <g mirror-in-rtl="" class="style-scope yt-icon">
            <path
              d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
export default Filter;
