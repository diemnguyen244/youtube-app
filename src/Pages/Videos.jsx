import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Youtube from "../api/youtube";

const Videos = () => {
  const { keyword } = useParams();
  // console.log(keyword);

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword);
    },
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred: {error.message}</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
          {videos.map((item) => (
            <VideoCard key={item.id} video={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
