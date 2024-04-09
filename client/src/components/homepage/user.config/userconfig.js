import React, { useState, useEffect } from 'react';
import TwinklingBackground from '../../landingpage/TwinkleBackground/TwinkleBackground';
import NavBar from '../fixedcomponents/NavBar';
import Header from '../fixedcomponents/Header';
import './userconfig.css';

const serverURL = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const UserConfig = () => {
  const [password, setPassword] = useState('');
  const [newpwd, setNewPwd] = useState('');
  const [profilePic] = useState('');
  const [enableSubmit, setEnabled] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadStatuses, setUploadStatuses] = useState({});
  const [uploaded, setUploaded] = useState(false);
  const [imageURLs, setImageURLs] = useState([]);
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserBio, setCurrentUserBio] = useState('');
  const [currentUserInterests, setCurrentUserInterests] = useState([]);

  useEffect(() => {
      const token = localStorage.getItem('token');
      const fetchUserData = async () => {
          try {
              const response = await fetch(`${serverURL}:${serverPort}/api/user/getCurrentUserId`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                  },
              });
        
              if (!response.ok) {
                  throw new Error(`ERROR: http status: ${response.status}`);
              }
        
              const data = await response.json();
              const userId = data._id;

              const res = await fetch(`${serverURL}:${serverPort}/api/user/getUser`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + token
                  },
                  body: JSON.stringify({
                      '_id': userId
                  }),
              });

              const userData = await res.json();
              console.log(userData);

              if (userData && userData.userObj && userData.userObj.username) {
                  setCurrentUserName(userData.userObj.username);
              }

              if (userData && userData.userObj && userData.userObj.bio) {
                setCurrentUserBio(userData.userObj.bio);
              }

              if (userData && userData.userObj && userData.userObj.interests) {
                setCurrentUserInterests(userData.userObj.interests);
              }

              if (userData && userData.userObj && userData.userObj.pictures && userData.userObj.pictures.length > 0) {
                  const userPictures = userData.userObj.pictures;
                  const imageURLs = await Promise.all(userPictures.map(async (mediaKey) => {
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
              }
          } catch (error) {
              console.error('Failed to fetch user data:', error);
          }
      };

      fetchUserData();
  }, []);

  const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      setSelectedFiles(files);

      const previews = files.map(file => ({
          name: file.name,
          url: URL.createObjectURL(file),
      }));
      setImagePreviews(previews);
  }

  const uploadFiles = async () => {
      if (!selectedFiles.length) return;

      const fileInfo = selectedFiles.map(file =>(
          {
              name: file.name,
              type: file.type
          }
      ));

      try {
          const response = await fetch(`${serverURL}:${serverPort}/api/images/generateUploadUrls`, {
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json',
              },
              body: JSON.stringify({files: fileInfo}),
          });
          const data = await response.json();

          const updatedFilesWithKeys = [...selectedFiles];


          await Promise.all(data.files.map(async (file, index) => {
              const { uploadURL, objectKey } = file;
              await fetch(uploadURL, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': selectedFiles[index].type,
                  },
                  body: selectedFiles[index],
              });

              updatedFilesWithKeys[index] = {
                  ...updatedFilesWithKeys[index],
                  objectKey: objectKey,
              };

              setUploadStatuses(prev => ({ ...prev, [file.name]: 'Uploaded'}));
          }))
          return updatedFilesWithKeys; 

      } catch (error){
          console.error('Upload error:', error);
      }
  }

  function handleUploadClick(event){
      event.preventDefault();
      uploadFiles();
      setUploaded(true);
  }

  const handleSave = async (e) => {
      e.preventDefault();
      try {
          
          const token = localStorage.getItem('token');
  
          const payload = {
              pictures: []
          };

          const uploadedFiles = selectedFiles.length > 0 ? await uploadFiles() : [];

          if(uploadedFiles){
              const fileKeys = uploadedFiles.map(file => file.objectKey).filter(key => key !== undefined);
  
              if(fileKeys.length > 0){
                  payload.pictures = fileKeys;
              }
  
              const res = await fetch(`${serverURL}:${serverPort}/api/user/uploadImages`, {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + token,
                  },
                  body: JSON.stringify(payload),
              });

              if (res.ok) {
                  alert("Profile picture updated successfully!");
              } else {
                  alert("Failed to update your profile picture :(");
              }
              window.location.reload();
          }
      } catch (err) {
          console.error("Error submitting message:", err);
          alert("Something went wrong :(");
      }
  };

  const handlePasswordChange = (event) => {
    setNewPwd(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${serverURL}:${serverPort}/api/user/modifyUser`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          'currentPassword': password,
          'password': newpwd,
          'profilePicture': profilePic
      }),
    });
    console.log(res);
    if (res.ok) {
      alert("Password updated successfully!");
    } else {
      alert("Failed to update your password :(");
    }
    } catch (err) {
      console.error("Error submitting message:", err);
      alert("Something went wrong :(");
    }
  }

  const handleConfirm = (e) => {
    const value = e.target.value;
    if(newpwd === value){
      setEnabled(true); 
    }
  }

  const handleOldPwd = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div>
        <Header />
        <NavBar />
      </div>
      <div className="config-page">
          <TwinklingBackground/>
          <div className='settings-picture-container'>
            <div className='current-settings-preview-container'>
                {imageURLs.length > 0 ? (
                    imageURLs.map((url, index) => (
                        <div key={index} className="current-media-link" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className='current-profile-picture' src={url} alt={`Current Media Preview ${index}`} />
                            <h1 className='current-user-name'>{currentUserName}</h1>
                        </div>
                    ))
                ) : (
                    <h1 className='current-user-name'>{currentUserName}</h1>
                )}
            </div>
            <h3 style={{color:"white"}}>Bio:</h3>
            <p style={{color:"white"}}>{currentUserBio}</p>
            <h3 style={{color:"white"}}>interests:</h3>
            <div style={{color:"white"}}>
              {currentUserInterests.map((interest, index) => (
                <div key={index}>{interest}</div>
              ))}
            </div>
            <input type="file" multiple onChange={handleFileChange} />
            <p style={{color:"white"}}>After choose new picture, click on upload first, then click on save</p>
            <div className='settings-preview-container'>
                {imagePreviews.map((preview, index) => (
                    <div className='profile-picture-container' key={index}>
                        <button className='upload-image-button' onClick={handleUploadClick}>{uploadStatuses[preview.name] || 'Upload Image'}</button>
                        <img className='profile-picture' src={preview.url} alt={preview.name} />
                    </div>
                ))}
            </div>
            <button className='save-new-image-button' style={{display: uploaded ? 'inline-block' : 'none'}} onClick={handleSave}>Update Profile Picture</button>
          </div>
          <div className='settings-password-container'>
            <form className="settings-container" onSubmit={handleSubmit}>
              <div className='new-password'>
                <label className="label" htmlFor="username">Modify Password: </label>
                <input className="input-field" type="password" id="password" placeholder='New Password' onChange={handlePasswordChange} />
                <input className="input-field" type="password" placeholder='Confirm New Password' onChange={handleConfirm} />
              </div>
              <div className='new-password'>
                <p style={{color:"white"}}>Confirm your old password to make changes:</p>
                <input className="input-field" type="password" placeholder='Current Password' onChange={handleOldPwd}/>
              </div>
              <button type="submit" className="update-info-button" disabled={!enableSubmit}>Update Password</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default UserConfig;