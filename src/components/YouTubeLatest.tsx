import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubeLatest = () => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: "AIzaSyBJodTaVATEMzu4_cowTuzr7KOLkfU8oSo",
              channelId: "UCRd2nZPMFYHCRq-rtQa6vHg",
              part: "snippet",
              order: "date",
              maxResults: 1,
            },
          }
        );
        const latestVideo = res.data.items[0];
        setVideoId(latestVideo.id.videoId);
      } catch (err) {
        console.error("Failed to fetch latest video", err);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl borderbg-black mt-12">
      {videoId ? (
        <iframe
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Latest YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-center text-white p-4">Loading latest video...</p>
      )}
    </div>
  );
};

export default YouTubeLatest;
