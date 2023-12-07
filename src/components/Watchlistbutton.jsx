import React from 'react'
import { useParams } from 'react-router-dom';
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import { useState, useEffect } from 'react';
import {Button} from "@chakra-ui/react";
function Watchlistbutton() {
    const [isAdded, setIsAdded] = useState(false);
    const [itemId, setShowItemId] = useState([]);
    const { id } = useParams();
    console.log(id);
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
    <div>
      <Button
            sx={{
              width: "40px",
              height: "40px",
              color: "black",
              display: "flex",
              backgroundColor: "black",
              marginTop: "30px",
              marginRight: "47px",
              border: "none",
              fontSize: "4px",
              cursor: "pointer",
              borderRadius: "8px",
              ":hover": {
                backgroundColor: "grey",
                border: "3px solid darkgrey",
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
            {/* Watchlist */}
          </Button>
    </div>
  )
}

export default Watchlistbutton
