import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfor from "../Components/ChannelInfor";
import RelatedVideos from "../Components/RelatedVideos";
const VideoDetail = () => {
  const {
    state: { video },
  } = useLocation();
  return (
    <section className="flex flex-col md:flex-row gap-4">
      <article className="basis-4/6">
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          frameBorder="0"
        ></iframe>
        <div className="p-8 sm-p-2">
          <h2 className="text-xl font-bold">{video.snippet.title}</h2>
          <ChannelInfor
            id={video.snippet.ChannelId}
            title={video.snippet.ChannelTitle}
          />
          <pre className="whitespace-pre-wrap">{video.snippet.description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
