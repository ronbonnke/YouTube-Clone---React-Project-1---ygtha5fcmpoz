import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import Watchlistbutton from "../components/Watchlistbutton";
import SideVideos from "../components/SideVideos";
import "../styles/Watch.css";
import { useCurrentplayingContext } from "../context/CurrentPlayingprovider";


function Watch() {
  const { id } = useParams();
  console.log(id);
  // const [itemId, setShowItemId] = useState([]);
  const { itemId, setShowItemId, isSidebarVisible } =
    useCurrentplayingContext();

  const videoRef = useRef(null);
  const getMovies = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
      {
        method: "GET",
        headers: {
          projectId: "01s6knzsacd8",
        },
      }
    );
    const data = await response.json();
    console.log("data:", data);
    console.log("data video: ", data.data.video_url);

    setShowItemId(data.data);
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
      width: isSidebarVisible ? "90%" : "100%",
      height: "100%",
      marginLeft: isSidebarVisible ? "auto" : "auto",
      padding: "10px",
      display:"flex"
    }}
    >
      <div>
        {itemId.video_url ? (
          <>
            <Flex marginTop="0%" marginLeft="auto">
              <div
                
              >
                <video
                  ref={videoRef}
                  width="95%"
                  height="100%"
                  marginLeft="auto"
                  controls
                >
                  <source src={itemId.video_url} type="video/mp4" />
                </video>
              </div>
              <div></div>
            </Flex>
            <Flex className="flex1"
              // direction="row"
              // alignItems="center"
              // padding="10px"
              // width="100%"
            >
              <div className="flex2">
                
              
              <h1 style={{ paddingTop: "25px"}}>
                {itemId.title}
              </h1>
              
                <div className="watch-button">
                
                  <Watchlistbutton
                    style={{
                    
                      width: "50%",
                      height: "25px",
                      
                    }}
                  />
                </div>
                </div>
            <h4
              // style={{ marginLeft: "10px", paddingTop: "10px", width: "65%" }}
            >
              {itemId.description}
            </h4>
             
            </Flex>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="side-video"

        style={{
        //   overflowY: "auto",
        //   overflowX: "hidden",
          height: "100vh",
          width: isSidebarVisible ? "45%" : "45%",
        }}
      >
        <SideVideos />
      </div>
    </div>
  );
}

export default Watch;
