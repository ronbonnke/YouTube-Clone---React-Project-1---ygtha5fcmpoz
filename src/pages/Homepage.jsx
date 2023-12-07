import React from "react";
import { useState, useEffect } from "react";
import "./Homepage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCurrentplayingContext } from "../context/CurrentPlayingprovider";
function Homepage({ api }) {
  const { videos, setVideos,loading,setLoading } = useCurrentplayingContext();


  useEffect(() => {
    axios
      .get(api, { headers: { projectID: "01s6knzsacd8" } })
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
    <div className="my-page">
      {loading ? (
        <p>Loading...</p>
      ) : videos.data.length > 0 ? (
        videos.data.map((video) => (
          <div className="card" key={video._id}>
            <Link to={`/watch/${video._id}`}>
              <img
                src={video.thumbnail}
                className="card-image"
                alt={video.title}
              />
            </Link>
            <div className="card-details">
              <h4>{video.title}</h4>
            </div>
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
}

export default Homepage;
