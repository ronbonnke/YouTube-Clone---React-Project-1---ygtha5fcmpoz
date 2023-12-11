import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import Watchlistbutton from "../components/Watchlistbutton";
import SideVideos from "../components/SideVideos";
import "../styles/Watch.css";
import { useCurrentplayingContext } from "../context/CurrentPlayingprovider";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Watch() {
  const { id } = useParams();
  const { itemId, setShowItemId, isSidebarVisible } = useCurrentplayingContext();
  const [randomViewCount, setRandomViewCount] = useState(0);
  const [randomLikeCount, setRandomLikeCount] = useState(0);
  const [randomDislikeCount, setRandomDislikeCount] = useState(0);

  const videoRef = useRef(null);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return count.toString();
    }
  };

  const getMovies = async () => {
    const response = await fetch(`https://academics.newtonschool.co/api/v1/ott/show/${id}`, {
      method: "GET",
      headers: {
        projectId: "01s6knzsacd8",
      },
    });
    const data = await response.json();

    setShowItemId(data.data);
    setRandomViewCount(getRandomInt(1000, 5000000)); 
    setRandomLikeCount(getRandomInt(10, 1000000));
    setRandomDislikeCount(getRandomInt(1, 100000)); 

    if (videoRef.current) {
      videoRef.current.load();
    }
    if (!response.ok) {
      console.error("Failed to fetch data.");
      return;
    }
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <div
      style={{
        width: isSidebarVisible ? "85%" : "100%",
        height: "100%",
        marginLeft: isSidebarVisible ? "11%" : "auto",
        padding: "10px",
        display: "flex",
      }}
    >
      <div>
        {itemId.video_url ? (
          <>
            <Flex marginTop="0%" marginLeft="auto">
              <div>
                <video ref={videoRef} width="95%" height="100%" marginLeft="auto" controls>
                  <source src={itemId.video_url} type="video/mp4" />
                </video>
              </div>
              <div></div>
            </Flex>
            <Flex className="flex1">
              <div className="flex2">
                <h1 style={{ paddingTop: "25px" }}>{itemId.title}</h1>
                <p style={{ paddingTop: "30px", fontWeight: "bolder" }}>Views: {formatCount(randomViewCount)}</p>
                <p style={{ paddingTop: "30px", fontWeight: "bolder" }}>Likes: {formatCount(randomLikeCount)}</p>
                <p style={{ paddingTop: "30px", fontWeight: "bolder" }}>Dislikes: {formatCount(randomDislikeCount)}</p>

                <div className="watch-button">
                  <Watchlistbutton
                    style={{
                      width: "50%",
                      height: "25px",
                    }}
                  />
                </div>
              </div>
              <h4>{itemId.description}</h4>
            </Flex>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div
        className="side-video"
        style={{
          height: "100vh",
          width: isSidebarVisible ? "90%" : "45%",
          marginRight: isSidebarVisible? "2px":"",
        }}
      >
        <SideVideos />
      </div>
    </div>
  );
}
export default Watch;