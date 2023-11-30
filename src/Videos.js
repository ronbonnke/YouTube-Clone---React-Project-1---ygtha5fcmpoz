import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Videos.css";
import Filter from "./Filter";
import VideoTile from "./components/VideoTile";
import Page from "./pages/Page";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      "https://academics.newtonschool.co/api/v1/ott/show?limit=100";

    axios
      .get(apiUrl, { headers: { projectID: "01s6knzsacd8" } })
      .then((response) => {
        setVideos(response.data);
        setLoading(false);

        console.log("Fetched Data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="videos">
      <Filter />
      {loading ? (
        <p>Loading...</p>
      ) : (
        // videos.data.map((video) => (
        //   <div className="col-md-4" key={video._id}>
        //     <VideoTile
        //       title={video.title}
        //       description={video.description}
        //       keywords={video.keywords}
        //       thumbnail={video.thumbnail}
        //       id={video._id}
        //     />
        //   </div>
        // ))

        <Page />
      )}
    </div>
  );
}

export default Videos;
