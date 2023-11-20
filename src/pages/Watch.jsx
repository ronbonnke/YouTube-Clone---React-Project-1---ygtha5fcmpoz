import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { Container, Flex, Button } from "@chakra-ui/react";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import { BiLike } from "react-icons/bi";
function Watch() {
  const [isAdded, setIsAdded] = useState(false);
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
    
        if (!response.ok) {
          console.error("Failed to fetch data.");
          return;
        }
      };

      useEffect(() => {
        getMovies();
      }, [id]);
      async function addRemoveWatchList(showId) {
        const token = localStorage.getItem("token");
        console.log("userData", token);
        if (token) {
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/ott/watchlist/like`,
            {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                projectId: "f104bi07c490",
              },
              body: JSON.stringify({ showId: showId }),
            }
          );
          if (response.ok) {
            setIsAdded(!isAdded);
          }
        }
      }

  return (
    <div style={{marginLeft:"0%", width:"100%"}}>
       {itemId.video_url ? (
        <>
        
            <Flex marginTop="1rem" marginLeft="10px" >
              <video ref={videoRef} width="65%" height="100%"  controls>
                <source src={itemId.video_url} type="video/mp4" />
              </video>

            </Flex>
            <div style={{display:"flex", width:"65%", marginLeft:"10px"}}>
              <div className='left'>

            <h1 style={{paddingTop:"20px"}}>
              {itemId.title}</h1>
              </div>
              <div className='right' style={{paddingTop:"20px", marginRight:"0px"}}>
              <BiLike />
              </div>

            </div>
              <h4 style={{marginLeft:"10px", paddingTop:"10px", width:"65%"}}>{itemId.description}</h4>
        </>
          ) : (
            <p>Loading...</p>
          )}
           <Button
              sx={{
                width: "140px",
                height: "80px",
                color: "white",
                display: "flex",
                backgroundColor: "rgba(41, 37, 45, 0.6)",
                marginTop: "30px",
                marginLeft: "80px",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                borderRadius: "8px",

                ":hover": {
                  backgroundColor: "#8230c6",
                  border: "2px solid #8230c6",
                },
              }}
              onClick={() => addRemoveWatchList(itemId._id)}
            >
              {!isAdded ? (
                <MdPlaylistAdd
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              ) : (
                <MdPlaylistAddCheck
                  style={{ color: "white", width: "20px", height: "20px" }}
                />
              )}
              Watchlist
            </Button>
    </div>
  )
}

export default Watch
