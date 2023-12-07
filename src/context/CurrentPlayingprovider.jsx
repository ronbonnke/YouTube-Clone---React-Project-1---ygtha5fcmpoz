import React,{useState, useEffect, createContext} from 'react'
import {useContext} from "react"
const CurrentPlayingContext = createContext();

function CurrentPlayingprovider({children}) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemId, setShowItemId] = useState([]);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <CurrentPlayingContext.Provider
      value={{
        videos,
        setVideos,
        loading,
        setLoading,
        itemId,
        setShowItemId,
        isSidebarVisible,
        setSidebarVisible,
      }}>
        {children}
    </CurrentPlayingContext.Provider>
  )
}

export default CurrentPlayingprovider;

export const useCurrentplayingContext =() =>{
    return useContext(CurrentPlayingContext);
}
