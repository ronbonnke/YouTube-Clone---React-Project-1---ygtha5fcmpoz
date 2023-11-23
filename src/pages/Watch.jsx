import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { Container, Flex, Button } from "@chakra-ui/react";

import { BiLike , BiDislike } from "react-icons/bi";
import Watchlistbutton from '../components/Watchlistbutton';
import SideVideos from '../components/SideVideos';


function Watch() {
    const { id } = useParams();
    console.log(id);
    const [itemId, setShowItemId] = useState([]);
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
        <div style={{ marginLeft: "0%", 
        // width: "100%", 
        display:"flex"}}>
          <div>

         
          {itemId.video_url ? (
            <>
              <Flex marginTop="1rem" marginLeft="10px">
                <div>

                <video ref={videoRef}
                 width="100%" 
                 height="100%" controls>
                  <source src={itemId.video_url} type="video/mp4" />
                </video>
                </div>
                <div>
                  {/* <SideVideos/> */}
                </div>
              </Flex>
              <Flex
                direction="row"  // Set direction to "row" to align items horizontally
                alignItems="center" // Align items vertically to the center
                style={{ paddingLeft: "10px", width: "100%"  }}
              >
                <h1 style={{ paddingTop: "20px", marginRight: "10px" }}>
                  {itemId.title}
                </h1>
                <Flex marginLeft="auto" alignItems="center">
              <div style={{ display: "flex", alignItems: "center", margin: 0 }}>


                {/* <BiLike style={{ paddingLeft: "20px", width: "50%", height: "25px", margin: 0 }} />
                <BiDislike style={{ paddingLeft: "20px", width: "50%", height: "25px", margin: 0 }} /> */}

                
                <Watchlistbutton style={{ paddingLeft: "20px", width: "50%", height: "25px", margin: 0 }} />
              </div>
            </Flex>
              </Flex>
              <h4 style={{ marginLeft: "10px", paddingTop: "10px", width: "65%" }}>
                {itemId.description}
              </h4>
            </>
          ) : (
            <p>Loading...</p>
          )}
           </div>
           <div style={{ overflowY: "auto", overflowX: "hidden", height: "100vh", width:"40%"}}>

                 <SideVideos/>
           </div>
          
        </div>
      );
}

export default Watch
