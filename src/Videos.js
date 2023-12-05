import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Videos.css";
import Filter from "./Filter";
import Homepage from "./pages/Homepage";

function Videos() {
  return (
    <div className="videos">
      <Filter />
      <h1>TRENDING 🔥</h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=suspense"
        }
      />

      <h1>ROMANCE 👄 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=8&keywords=romance"
        }
      />

      <h1>COMEDY 😂 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=thriller"
        }
      />

      <h1>DRAMA 🤡 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=drama"
        }
      />

      <h1>ACTION ⚡</h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=8&keywords=action"
        }
      />
      <h1>MAGIC 🪄 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=magic"
        }
      />
      <h1>MYSTERY 👽 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=16&keywords=mystery"
        }
      />

      <h1>FANTASY 💕 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=8&keywords=fantasy"
        }
      />
      <h1>THRILLER ♨️ </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=20&keywords=thriller"
        }
      />
      <h1>HEROIC 💥 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=thriller"
        }
      />

      <h1>BETRAYAL 💔 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=16&keywords=betrayal"
        }
      />
      <h1>SURVIVAL 🏊‍♂️ </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=8&keywords=survival"
        }
      />
      <h1>JOURNEY 🪂 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=journey"
        }
      />
      <h1>SCI-FI 🔬 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=sci-fi"
        }
      />
      <h1>REVENGE 😈 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=revenge"
        }
      />
      <h1>EPIC 👻 </h1>
      <Homepage
        api={
          "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=epic"
        }
      />

      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <Page
          api={
            "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=suspense"
          }
          category={"Trending"}
        />
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Page
          api={
            "https://academics.newtonschool.co/api/v1/ott/show?limit=12&keywords=drama"
          }
        />
      )} */}

      {/* {loading ? <p>Loading...</p> : <Page />}
      {loading ? <p>Loading...</p> : <Page />} */}
    </div>
  );
}

export default Videos;
