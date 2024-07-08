import React, { useState, useEffect } from 'react';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faFire,faBolt,faChevronRight,faClockRotateLeft,faVideo,faPodcast,faThumbsUp,faList,faGear,
  faBagShopping,faClapperboard,faTrophy,faLightbulb,faMagnifyingGlass,faBell,faCircleQuestion,faMicrophone, faFlag,faNewspaper,faVestPatches} from '@fortawesome/free-solid-svg-icons';
  import{faYoutube} from '@fortawesome/free-brands-svg-icons'
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
      <div className="div1">
       <FontAwesomeIcon icon={faList}  /> &nbsp; &nbsp;  &nbsp; &nbsp;  <FontAwesomeIcon id='youtube' icon={faYoutube} /> <b>YouTube</b><sup className='in' >IN</sup>
      </div>
      <div className="div2">
        <input type='search' placeholder='Search' /><button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>  &nbsp; &nbsp;  <span><FontAwesomeIcon icon={faMicrophone} /></span>
      </div>
      <div className="div3">
       <div className="icon"><FontAwesomeIcon icon={faVideo} /></div>
       <div className="icon"><FontAwesomeIcon icon={faBell} /></div>
       <div className="icon"><img className='logo' src='https://lh3.googleusercontent.com/ogw/AF2bZyjfF3GiuOUfoX6SEDNNYmXGs9b4Jow-vuPs5dJoYp-jgeI=s32-c-mo' alt='logo' /></div>
      </div>
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
          <p className="sidebarTitle">
            <span>
              <img className='logo' src='https://lh3.googleusercontent.com/ogw/AF2bZyjfF3GiuOUfoX6SEDNNYmXGs9b4Jow-vuPs5dJoYp-jgeI=s32-c-mo' alt='icon' />
            </span>
            <span> &nbsp; &nbsp; Gold UVGaming</span>
            </p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faList} /> &nbsp; &nbsp; All subscriptions</p>
          <hr/>
          <p className="sidebartext">Explore</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faFire} /> &nbsp; &nbsp; Trending</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faBagShopping} /> &nbsp; &nbsp; Shopping</p>
          <p className="sidebarTitle"> <MusicNoteIcon/> &nbsp; &nbsp; Music</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faClapperboard} /> &nbsp; &nbsp; Films</p>
          <p className="sidebarTitle"> 
            <span>
              <svg fill="none" height="34" viewBox="0 0 24 1" width="24" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z" fill="black" fill-rule="evenodd"/>
          <path clip-rule="evenodd" d="M8.82789 8.6971C7.05737 10.5181 7.05737 13.4819 8.82789 15.3029L7.39394 16.6971C4.86869 14.0998 4.86869 9.90017 7.39394 7.3029L8.82789 8.6971ZM15.1721 15.3029C16.9426 13.4819 16.9426 10.5181 15.1721 8.6971L16.6061 7.3029C19.1313 9.90017 19.1313 14.0998 16.6061 16.6971L15.1721 15.3029Z" fill="black" fill-rule="evenodd"/>
          <path clip-rule="evenodd" d="M6.69609 6.70772C3.76797 9.63076 3.76797 14.3692 6.69609 17.2923L5.2831 18.7077C1.5723 15.0033 1.5723 8.99665 5.2831 5.29228L6.69609 6.70772ZM17.3039 17.2923C20.232 14.3692 20.232 9.63077 17.3039 6.70772L18.7169 5.29228C22.4277 8.99665 22.4277 15.0033 18.7169 18.7077L17.3039 17.2923Z" fill="black" fill-rule="evenodd"/>
             </svg>
          </span>
          <span> &nbsp; &nbsp; Live</span></p>
          <p className="sidebarTitle">
            <span>
              <img src='https://img.icons8.com/ios/50/ps-controller.png' alt='gaming'/>
            </span>
             &nbsp; &nbsp; Gaming</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faNewspaper} /> &nbsp; &nbsp; News</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faTrophy} /> &nbsp; &nbsp; Sport</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faLightbulb} /> &nbsp; &nbsp; Courses</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faVestPatches} /> &nbsp; &nbsp; Fashion & beauty</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faPodcast} /> &nbsp; &nbsp; Podcasts</p>
          <hr/>
          <p className="sidebartext">More from YouTube</p>
          <p className="sidebarTitle" > <span id='youtube'><FontAwesomeIcon icon={faYoutube} /></span> &nbsp; &nbsp; YouTube Premium</p>
          <p className="sidebarTitle"> 
            <span>
           <img src='https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-48-512.png' alt='ytstudio'/>
            </span>
            <span> &nbsp; &nbsp; YouTube Studio</span>
            </p>
          <p className="sidebarTitle"> 
            <span>
              <img src='https://cdn1.iconfinder.com/data/icons/hayal-social-media-icons/128/youtube.png' alt='ytmusic'/>
            </span>
            <span> &nbsp; &nbsp; YouTube Music</span>
            </p>
          <p className="sidebarTitle">
            <span>
              <img src='https://cdn2.iconfinder.com/data/icons/round-social-media-icons/58/youtube.png' alt='ytkids'/>
            </span>
            <span> &nbsp; &nbsp; YouTube Kids</span>
            </p>
          <hr/>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faGear} /> &nbsp; &nbsp; Setting</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faFlag} /> &nbsp; &nbsp; Report history</p>
          <p className="sidebarTitle"> <FontAwesomeIcon icon={faCircleQuestion} /> &nbsp; &nbsp; Help</p>
          <p className="sidebarTitle">
            <span>
              <img src='https://pic.onlinewebfonts.com/thumbnails/icons_306151.svg' alt='feedback'/>
            </span>
            <span>&nbsp; &nbsp; Send feedback</span>
             </p>



        </div>
      </div>
      <div className="youtube">
        <div className="youtube__header">
          <span className='youtube__header_button' >All</span>
          <span className='youtube__header_button' >Music</span>
          <span className='youtube__header_button' >Gaming</span>
          <span className='youtube__header_button'>Web pages</span>
          <span className='youtube__header_button'>News</span>
          <span className='youtube__header_button'>Indian pop music</span>
          <span className='youtube__header_button'>1990s</span>
          <span className='youtube__header_button'>Alka Yagnik</span>
          <span className='youtube__header_button'>T-Series</span>
          <span className='youtube__header_button'>Movie musicals</span>
          <span className='youtube__header_button'>Live</span>
          <span className='youtube__header_button'>Jukebox</span>
          <span className='youtube__header_button'>Mixes</span>
          <span className='youtube__header_button'>Computers</span>
          <span className='youtube__header_button'>B Praak</span>
          <span className='youtube__header_button'>Indian soap operas</span>
          <span className='youtube__header_button'>Amit Trivedi</span>
          <span className='youtube__header_button'>Thrillers</span>
          <span className='youtube__header_button'>Recently upload</span>
          <span className='youtube__header_button'>Watched</span>
          <span className='youtube__header_button'>New to you</span>
        </div>
      <ul>
        {videos.slice(1)?.map((video) => (
          <li key={video.id?.videoId}>
           <a href={`https://www.youtube.com/watch?v=${video.id?.videoId}`}>
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