import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter d-flex align-items-center">
      <div className="single-filter">
        <span className="filter-items pointer active">All</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer ">Mixes</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Music</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">live</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Cooking</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Gaming</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Movies</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Comedy</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Mototcycling</span>
      </div>
     
      <div className="single-filter">
        <span className="filter-items pointer">Bodybuilding</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">News</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Programming</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Live</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">JavaScript</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">ReactJs</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">ReactDom</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">NodeJS</span>
      </div>
      <div className="single-filter">
        <svg
          viewBox="0 0 16 13"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{"width":"20px"}}
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
