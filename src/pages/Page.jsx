import React from 'react'
import { useState, useEffect } from 'react';
import './Page.css'
import axios from 'axios'; 
import { Link } from 'react-router-dom';
function Page() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define your API endpoint based on the base URL
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ott/show?limit=100';
        // Replace with the correct API endpoint
    
        // Fetch data from your Axios instance
        axios
        .get(apiUrl, { headers: { projectID: '01s6knzsacd8' } })
          .then((response) => {
            setVideos(response.data);
            setLoading(false);
    
            console.log('Fetched Data:', response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, []); 
     

    return (
        <div className='my-page'>
          
          {loading ? (
            <p>Loading...</p>
          ) : videos.data.length > 0 ? (
            videos.data.map((video) => (
              <div className="card" key={video._id}>
                <Link
                to={`/watch/${video._id}`}
                >
                
                <img src={video.thumbnail} className='card-image' alt={video.title} />
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

export default Page
