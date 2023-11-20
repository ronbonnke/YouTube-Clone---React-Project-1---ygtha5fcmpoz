import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Box, Button, Flex, Grid } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
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
    <div>
      <>
      <h1> my WatchList</h1>
                <hr style={{ color: "white" }} />
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  width="55rem"
                  height="auto"
                >
                  {watchlist.map((item) => (
                    <Box
                      style={{
                        margin: "10px",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItem: "flex-start",
                        height: "150px",
                        width: "300px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Container
                        style={{
                          maxHeight: "150px",
                          width: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.thumbnail}
                          alt="item.title"
                          style={{
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </Container>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: "20px",
                          paddingTop: "50px",
                          width: "50%",
                          height: "40px",
                        }}
                      >
                        {item.title}
                      </div>
                      <Button
                        onClick={() => addRemoveWatchList(item?._id)}
                        style={{
                          top: "-90px",
                          left: "80px",
                          cursor: "pointer",
                          border: "none",
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      >
                        <AiOutlineClose />
                      </Button>
                    </Box>
                  ))}
                </Grid>
              </>
       
    </div>
  )
}

export default Watchlist
