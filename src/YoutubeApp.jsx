import React, { useState, useEffect } from 'react';
import  './YoutubeApp.css';

function Youtube() {
  const [videos, setVideos] = useState([]);
  // const apiKey = 'AIzaSyAtYsa1Af4sqy-YSRBCz7_B2V493dgTJbM';
  // const apiUrl = `https://www.googleapis.com/youtube/v3/search`;
  const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6FE82LQoJwXKJhL9vYaxFg&maxResults=25&q=golduvgaming&videoCaption=videoCaptionUnspecified&videoDefinition=any&videoDuration=any&videoType=any&key=AIzaSyAtYsa1Af4sqy-YSRBCz7_B2V493dgTJbM`;
  // const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&q=surfing&key=AIzaSyAtYsa1Af4sqy-YSRBCz7_B2V493dgTJbM`;
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(api);
      const data = await response.json();
      const videos = data.items;
      setVideos(videos);
    };

    fetchVideos();
  }, [api]);

  return (
    <div className='youtube'>
      <ul>
        {videos.slice(1).map((video) => (
          <li key={video.id.videoId}>
           <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              <img className='video-thumbnails' src={video.snippet.thumbnails.default.url} alt='video_thumbnails'/>
              </a>
              <div className="title-logo">
                <div className="logo"><img src='https://yt3.ggpht.com/ZvNVKPoeLXNz11VK2LWE3Com2hKczXDGV0JprrU6OqggHv9Lisymr5k9hS_hHujQTAd1eBs_ng=s240-c-k-c0xffffffff-no-rj-mo' alt='youtube_chaneel_logo'/></div>
                 <div className="title">
                 <p className='video-title'>{video.snippet.title}</p>
                 <p className='description'>{video.snippet.description}</p>
                 <p>179K views 11 months ago</p>
                 </div>
              </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Youtube;