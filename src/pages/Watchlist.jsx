import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Box, Button, Flex, Grid } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Watchlist() {
  const [watchlist, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(true);

  async function getWatchList() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            projectId: "f104bi07c490",
          },
        }
      );

      console.log("response", response);
      const data = await response.json();
      console.log("data i need:", data.data);
      if (Array.isArray(data?.data?.shows)) {
        setWatchList(data?.data?.shows);
        setLoading(false);
      } else {
        console.error("Data is not an array:", data.data.shows);
      }
    }
  }

  async function addRemoveWatchList(showId) {
    const token = localStorage.getItem("token");
    // console.log("userData", token);
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
        const updatedWatchlist = isAdded
          ? watchlist.filter((item) => item?._id !== showId)
          : [...watchlist, showId];

        setWatchList(updatedWatchlist);
        setIsAdded(!isAdded);
      }
    }
  }
  useEffect(() => {
    getWatchList();
  }, []);
 

  return (
    <div style={{width:"100%",textAlign:"center"}}>
    <h1 >My WatchList</h1>
    <hr style={{ color: "white" }} />
    <Grid templateColumns="repeat(4, 1fr)" gap={4} width="80%" mx="auto">
      {watchlist.map((item) => (
        <Box
          key={item._id}
          style={{
            margin: "10px",
            padding: "20px",
            position: "relative",
            height: "300px",
            width: "250px",
          }}
        >
          <Container key={item._id}
            style={{
              maxHeight: "200px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Link to={`/watch/${item._id}`}>
            
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                maxHeight: "100%",
              }}
            />
            </Link>

          </Container>
          <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <div
              style={{
                textAlign: "left",
                color: "black",
                padding: "10px 0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                textAlign: "left",
                color: "black",
                padding: "10px 0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.description}
            </div>
          </div>
          <Button
            onClick={() => addRemoveWatchList(item._id)}
            style={{
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
              color: "black",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <AiOutlineClose />
          </Button>
        </Box>
      ))}
    </Grid>
  </div>
  )
}

export default Watchlist
