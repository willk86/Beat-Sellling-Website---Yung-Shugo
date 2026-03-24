import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubeLatest = () => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const fetchRandomVideo = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              key: "AIzaSyBJodTaVATEMzu4_cowTuzr7KOLkfU8oSo",
              playlistId: "PLtvd9zpVkJGNYvjZPWC52jJ-dn2k393fp",
              part: "snippet",
              maxResults: 50,
            },
          },
        );
        const videos = res.data.items;
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideo = videos[randomIndex];
        setVideoId(randomVideo.snippet.resourceId.videoId);
      } catch (err) {
        console.error("Failed to fetch playlist videos", err);
      }
    };

    fetchRandomVideo();
  }, []);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl borderbg-black mt-12">
      {videoId ? (
        <iframe
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Random YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-center text-white p-4">Loading random video...</p>
      )}
    </div>
  );
};

export default YouTubeLatest;
