import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListItem, UnorderedList, Container } from "@chakra-ui/react";

export default function Searchlist({ searchData, clearSearchValue }) {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const suggestionRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show?search={"title":"${searchData}"}`,
          {
            method: "GET",
            headers: {
              projectId:" f104bi07c490",
            },
          }
        );

        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setResult(data.data || []);
        } else {
          console.error("Error fetching data:", data.message);
          setResult([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    if (searchData) {
      fetchData();
    } else {
      setResult([]);
    }
    
  }, [searchData]);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setResult([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  console.log(result);

  const handleSuggestionClick = (selectedItem) => {
    navigate(`/watch/${selectedItem._id}`);
    clearSearchValue();
    setResult([]);
  };

  return (
    <Container style={{ backgroundColor: "#fff" }}>
      {/* Suggestions Container */}
      {result.length > 0 && (
        <Container
          ref={suggestionRef}
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            top: "110%",
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 2,
            cursor: "pointer",
            borderRadius: "25px",
          }}
        >
          <UnorderedList style={{ listStyle: "none" }}>
            {result.map((item) => (
              <ListItem className="cardStyle" key={item.id}>
                <Link
                  to={`/watch/${item._id}`}
                  onClick={() => handleSuggestionClick(item)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Container>
      )}
    </Container>
  );
}
