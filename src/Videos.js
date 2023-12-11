import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Videos.css";
import Filter from "./Filter";
import Homepage from "./pages/Homepage";
import { useCurrentplayingContext } from "./context/CurrentPlayingprovider";

function Videos() {
  const { isSidebarVisible } = useCurrentplayingContext();
  return (
    // <div
    // style={{
    //   gridTemplateColumns: isSidebarVisible
    //     ? "auto auto auto"
    //     : "auto auto auto auto",
    // }}
    // >
    <div
      className="videos"
      style={{ marginLeft: isSidebarVisible ? "11%" : "" }}
    >
      <Filter />

      <h1>TRENDING 🔥</h1>
      <Homepage api={"/ott/show?limit=16&keywords=suspense"} />

      <h1>COMEDY 😂 </h1>
      <Homepage api={"/ott/show?limit=8&keywords=thriller"} />

      <h1>LOVE 💑 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=love"} />

      <h1>DRAMA 🤡 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=drama"} />

      <h1>ROMANCE 👄 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=romance"} />

      <h1>ACTION ⚡</h1>
      <Homepage api={"/ott/show?limit=8&keywords=action"} />
      <h1>MAGIC 🪄 </h1>
      <Homepage api={"/ott/show?limit=16&keywords=magic"} />
      <h1>MYSTERY 👽 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=mystery"} />

      <h1>FANTASY 💕 </h1>
      <Homepage api={"/ott/show?limit=8&keywords=fantasy"} />
      <h1>THRILLER ♨️ </h1>
      <Homepage api={"/ott/show?limit=24&keywords=thriller"} />
      <h1>HEROIC 💥 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=thriller"} />

      <h1>BETRAYAL 💔 </h1>
      <Homepage api={"/ott/show?limit=20&keywords=betrayal"} />
      <h1>SURVIVAL 🏊‍♂️ </h1>
      <Homepage api={"/ott/show?limit=4&keywords=survival"} />
      <h1>JOURNEY 🪂 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=journey"} />
      <h1>SCI-FI 🔬 </h1>
      <Homepage api={"/ott/show?limit=8&keywords=sci-fi"} />
      <h1>REVENGE 😈 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=revenge"} />
      <h1>EPIC 👻 </h1>
      <Homepage api={"/ott/show?limit=12&keywords=epic"} />
    </div>
  );
}

export default Videos;
