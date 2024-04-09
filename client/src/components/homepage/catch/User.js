import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Catch.css';

const serverURL = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const User = ({ user }) => {
  const navigate = useNavigate();
  const [actionChatCompleted, setActionChatCompleted] = useState(false);
  const [actionBlockCompleted, setActionBlockCompleted] = useState(false);

  const handleChatNowClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${serverURL}:${serverPort}/api/convo/newConvo`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify({
              'username': user.username
          }),
      });
      const data = await res.json();
      console.log(`The response is: ${data}`);
      setActionChatCompleted(true);
    }
    catch(err) {
      console.log(err);
    }
  };

  const handleBlockClick = async () => {
    if (window.confirm('Are you sure you want to block this user?')) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${serverURL}:${serverPort}/api/user/blockUser`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify({
            'username': user.username
          }),
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        console.log(`The response is: ${data}`);
        setActionBlockCompleted(true);
      } catch(err) {
        console.log(err);
      }
    }
  };
  

  useEffect(() => {
    if (actionChatCompleted) {
      navigate('/finally');
    }
    if (actionBlockCompleted) {
      window.location.reload();
    }
  }, [actionChatCompleted, actionBlockCompleted, navigate]);

  return (
    <div className="user-container">
      <div className="user-info">
        <p>{user.username}</p>
        <p>Interests: {user.interests.join(', ')}</p>
      </div>
      <div className="chat-now">
        <button className="chat-now-button" onClick={handleChatNowClick}>Chat Now</button>
        <button className="block-button" onClick={handleBlockClick}>Block</button>
      </div>
    </div>
  );
};

export default User;
