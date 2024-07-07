import React, { useState, useEffect } from 'react';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faFire,faBolt,faChevronRight,faClockRotateLeft,faPodcast,faThumbsUp,faList,faGear,
  faBagShopping,faClapperboard,faTrophy,faLightbulb,faCircleQuestion, faFlag} from '@fortawesome/free-solid-svg-icons';
  import{faYoutube} from '@fortawesome/free-brands-svg-icons'
  // import {faFlag} from '@fortawesome/free-regular-svg-icons'
import  './YoutubeApp.css';

function Youtube() {
  const [videos, setVideos] = useState([]);
  // const apiKey = 'AIzaSyAtYsa1Af4sqy-YSRBCz7_B2V493dgTJbM';
  const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6FE82LQoJwXKJhL9vYaxFg&maxResults=25&q=golduvgaming&videoCaption=videoCaptionUnspecified&videoDefinition=any&videoDuration=any&videoType=any&key=AIzaSyAtYsa1Af4sqy-YSRBCz7_B2V493dgTJbM`;
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
    <>
    <div className="container">
      <div className="div"> &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; <b>YouTube</b><sup>IN</sup></div>
      <div className="div">
        <input type='search' /><button>o</button> <span>i</span>
      </div>
      <div className="div">icon</div>
    </div>
    <div className='main'>
      <div className="sidebar">
        <div className="sidebarItem">
        <p className="sidebarTitle"><FontAwesomeIcon icon={faHouse}/> &nbsp; &nbsp; Home</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faBolt} /> &nbsp; &nbsp; Shorts</p>
          <p className="sidebarTitle"> <SubscriptionsOutlinedIcon/>  &nbsp; &nbsp; Subscriptions</p>
          <hr/>
          <p className="sidebartext">You <FontAwesomeIcon icon={faChevronRight} /></p>
          <p className="sidebarTitle" id='icons'> <SwitchAccountOutlinedIcon/>  &nbsp; &nbsp; Your channel</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faClockRotateLeft} /> &nbsp; &nbsp; History</p>
          <p className="sidebarTitle"> <PlaylistPlayOutlinedIcon/> &nbsp; &nbsp; Playlists</p>
          <p className="sidebarTitle"> <SmartDisplayOutlinedIcon/> &nbsp; &nbsp; Your videos</p>
          <p className="sidebarTitle"> <AccessTimeIcon /> &nbsp; &nbsp; Watch later</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faThumbsUp} /> &nbsp; &nbsp; Liked videos</p>
          <hr/>
          <p className="sidebartext">Subscriptions</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; Gold UVGaming</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faList} /> &nbsp; &nbsp; All subscriptions</p>
          <hr/>
          <p className="sidebartext">Explore</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faFire} /> &nbsp; &nbsp; Trending</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faBagShopping} /> &nbsp; &nbsp; Shopping</p>
          <p className="sidebarTitle"> <MusicNoteIcon/> &nbsp; &nbsp; Music</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faClapperboard} /> &nbsp; &nbsp; Films</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; Live</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; Gaming</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; News</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faTrophy} /> &nbsp; &nbsp; Sport</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faLightbulb} /> &nbsp; &nbsp; Courses</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; Fashion & beauty</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faPodcast} /> &nbsp; &nbsp; Podcasts</p>
          <hr/>
          <p className="sidebartext">More from YouTube</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faYoutube} /> &nbsp; &nbsp; YouTube Premium</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; YouTube Studio</p>
          <p className="sidebarTitle">  &nbsp; &nbsp; YouTube Music</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; YouTube Kids</p>
          <hr/>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faGear} /> &nbsp; &nbsp; Setting</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faFlag} /> &nbsp; &nbsp; Report history</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faCircleQuestion} /> &nbsp; &nbsp; Help</p>
          <p className="sidebarTitle"> &nbsp; &nbsp; Send feedback</p>



        </div>
      </div>
      <div className="youtube">
      <ul>
        {videos.slice(1).map((video) => (
          <li key={video.id.videoId}>
           <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              <img className='video-thumbnails' src={video.snippet.thumbnails.default.url} alt='video_thumbnails'/>
              </a>
              <div className="title-logo">
                <div className="logo"><img src='https://lh3.googleusercontent.com/ogw/AF2bZyjfF3GiuOUfoX6SEDNNYmXGs9b4Jow-vuPs5dJoYp-jgeI=s32-c-mo' alt='youtube_chaneel_logo'/></div>
                 <div className="title">
                 <p className='video-title'>{video.snippet.title}</p>
                 {/* <p className='description'>{video.snippet.description}</p> */}
                 <p>Gold UV Gaming</p>
                 <p>179K views 11 months ago</p>
                 </div>
              </div>

          </li>
        ))}
      </ul>
      </div>
    </div>
    </>
  );
}

export default Youtube;