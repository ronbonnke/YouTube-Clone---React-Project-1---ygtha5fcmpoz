import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

export default function SearchResult() {
  const { id } = useParams();

  const [suggestionData, setSuggestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
        {
            
          method: "GET",
          headers: {
            projectId: "8jf3b15onzua",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        setSuggestionData(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  if (!suggestionData) {
    return (
      <div style={{ marginTop: "10rem" }}>
        <h3 style={{ color: "white" }}>Loading...</h3>
      </div>
    );
  }
  return (
    <div style={{ marginTop: "7rem", marginLeft: "40px" }}>
      <h3 style={{ color: "Grey" }}>
        Showing results for "{suggestionData.title}"{" "}
      </h3>
      <hr style={{ marginLeft: "5px", marginRight: "45px" }}></hr>
      <div style={{ width: "300px", height: "200px" }}>
        <Card key={suggestionData._id} item={suggestionData} />
      </div>
    </div>
  );
}
