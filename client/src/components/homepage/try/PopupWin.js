import React from 'react';
import './PopupWin.css';
import { useState, useEffect } from 'react'; 

const serverURL = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const PopupWin = ({ isOpen, onClose, userData, onLike }) => {
  
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImageURLs = async () => {
      if (userData && userData.pictures && userData.pictures.length > 0) {
        try {
          const imageURLs = await Promise.all(userData.pictures.map(async (mediaKey) => {
            const mediaRes = await fetch(`${serverURL}:${serverPort}/api/images/getImageURL`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ fileName: mediaKey })
            });
            const mediaData = await mediaRes.json();
            return mediaData.url; 
          }));

          setImageURLs(imageURLs.filter(url => url !== null));
        } catch (error) {
          console.error("Error fetching media URLs:", error);
        }
      }
    };

    fetchImageURLs();
  }, [userData]);
  
  const handlePreCloseLogic = () => {
    var elements = document.getElementsByClassName('popup-win');
    if (elements.length > 0) {
      elements[0].classList.add('popup-win-slide-down');
    }

    setTimeout(() => {
      onClose();
    }, 800);
  };

  const handlePreLikeLogic = () => {
    var elements = document.getElementsByClassName('popup-win');
    if (elements.length > 0) {
      elements[0].classList.add('popup-win-slide-down-like');
    }

    setTimeout(() => {
      onLike();
    }, 800);
  };

  if (!isOpen) {
    return null;
  } else {
    return (
      <div className='popup-win'>
        <button className="close-button" onClick={handlePreCloseLogic}>x</button>
        <div className='popup-content'>
          <h1>{userData.username}</h1>
          <p>Bio: {userData.bio}</p>
          <p>Interests: {userData.interests.join(', ')}</p>
        </div>
        <div className="mediaLinkBox">
          {imageURLs.map((url, index) => (
            <div key={index} className="mediaLink">
              <div className="mediaLinkPreview">
                <img className='profile-picture' src={url} alt={`Media Preview ${index}`} />
              </div>
            </div>
          ))}
        </div>
        <button className='like-button' onClick={handlePreLikeLogic}>Like</button>
      </div>
    );
  }
};

export default PopupWin;
