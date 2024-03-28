import React, { useState, useEffect, useRef } from 'react';
import Header from '../fixedcomponents/Header';
import NavBar from '../fixedcomponents/NavBar';
import './Finally.css';
import Avatar from 'react-avatar';
import TwinklingBackground from '../../landingpage/TwinkleBackground/TwinkleBackground';
import Messages from './Messages';

const serverURL = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const Finally = () => {
    const [theUser, setUserID] = useState(null);
    const [convos, setConvos] = useState([]);
    const [currChat, setCurrChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [burnAfter, setBurn] = useState(false);
    const chatBoxTopRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    useEffect(() => {
        if (chatBoxTopRef.current) {
            chatBoxTopRef.current.scrollTop = chatBoxTopRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        const getUserID = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${serverURL}:${serverPort}/api/user/getCurrentUserId`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const data = await res.json();
                setUserID(data._id);
            } catch (err) {
                console.error("Error getting user:", err);
            }
        };
        getUserID();
    }, []);

    useEffect(() => {
        const retrieveConversations = async () => {
            try {
                const token = localStorage.getItem('token');
    
                const res = await fetch(`${serverURL}:${serverPort}/api/convo/getConvos`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    }
                });

                let convosTemp = await res.json();
    
                const updatedConvos = await Promise.all(convosTemp.map(async (convo) => {
                    const userId = convo.userId;
    
                    const userDataRes = await fetch(`${serverURL}:${serverPort}/api/user/getUser`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        },
                        body: JSON.stringify({ '_id': userId }),
                    });

                    const userData = await userDataRes.json();

                    if (!userData || !userData.userObj || !userData.userObj.pictures) return convo;
    
                    const imageURLs = await Promise.all(userData.userObj.pictures.map(async (mediaKey) => {
                        const mediaRes = await fetch(`${serverURL}:${serverPort}/api/images/getImageURL`, {
                            method: "POST",
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ fileName: mediaKey })
                        });
                        const mediaData = await mediaRes.json();
                        return mediaData.url;
                    }));
    
                    return { ...convo, imageURLs: imageURLs.filter(url => url !== null) };
                }));
    
                setConvos(updatedConvos);
            } catch (err) {
                console.error("Error retrieving data:", err);
            }
        };
    
        retrieveConversations();
    }, []);
    
    useEffect(() => {
        const retrieveMessages = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${serverURL}:${serverPort}/api/message/batchGetMessages?convoID=${currChat}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const data = await res.json();
                let messagesWithMedia = await Promise.all(data.messageList.map(async (message) => {
                    if (message.mediaLink && message.mediaLink.length > 0) {
                        const imageURLs = await Promise.all(message.mediaLink.map(async (mediaKey) => {
                            try {
                                const mediaRes = await fetch(`${serverURL}:${serverPort}/api/images/getImageURL`, {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ fileName: mediaKey })
                                });
                                const mediaData = await mediaRes.json();
                                return mediaData.url;
                            } catch (error) {
                                console.error("Error fetching media URL:", error);
                                return null;
                            }
                        }));
    
                        message.imageURLs = imageURLs.filter(url => url !== null);
                    } else {
                        message.imageURLs = [];
                    }
                    return message;
                }));
                setMessages(messagesWithMedia);
            } catch (err) {
                console.error("Error retrieving messages:", err);
            }
        };
    
        if (currChat) {
            retrieveMessages();
        }
    
        const intervalId = setInterval(() => {
            if (currChat) {
                retrieveMessages();
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currChat]);

    const handleDeleteMessage = async (messageId) => {
        try {
            const token = localStorage.getItem('token');
            await fetch(`${serverURL}:${serverPort}/api/message/deleteMessage`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify({
                    '_id': messageId,
                }),
            });
            setMessages(messages.filter(msg => msg._id !== messageId));
        } catch (err) {
            console.error("Error deleting message:", err);
        }
    };

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

        const fileInfo = selectedFiles.map(file => ({
            name: file.name,
            type: file.type,
        }));

        try {
            const response = await fetch(`${serverURL}:${serverPort}/api/images/generateUploadUrls`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ files: fileInfo }),
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
            }));

            setSelectedFiles(updatedFilesWithKeys);
            return updatedFilesWithKeys;
        } catch (error) {
            console.error('Upload error:', error);
            return [];
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const payload = {
                body: newMessage,
                convoID: currChat,
                burnAfterRead: burnAfter,
            };
            const uploadedFiles = selectedFiles.length > 0 ? await uploadFiles() : [];

            const fileKeys = uploadedFiles.map(file => file.objectKey).filter(key => key !== undefined);

            if (fileKeys.length > 0) {
                payload.mediaLink = fileKeys;
            }
            const res = await fetch(`${serverURL}:${serverPort}/api/message/postMessage`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            setMessages([...messages, data]);
            setNewMessage("");
            setImagePreviews([]);
            setSelectedFiles([]);
        } catch (err) {
            console.error("Error submitting message:", err);
        }
    };

    const sendRandomIceBreaker = async (e) => {
        const iceBreakerLib = [
            "Hi there! How's your day going?",
            "Hey! I noticed we share an interest in computer science. Have you been involved in it long?",
            "Hello! Came across your profile and you seem really cool. What do you like to do for fun?",
            "Hi! How do you usually spend your weekends?",
            "Hey there! Are you working on any personal projects right now?",
            "Hi! I’m always looking for book/music/movie recommendations. Got any favorites?",
            "Hey! What's something you're passionate about?",
            "Hello! Have you traveled anywhere interesting recently?",
            "Hi there! What's the best thing that happened to you this week?",
            "Hey! What’s a hobby you’ve always wanted to pick up but never did?",
            "Hi! Do you have a favorite go-to coffee shop or restaurant in town?",
            "Hey! If you could learn one new skill instantly, what would it be?",
            "Hello! Seen any good movies or shows lately?",
            "Hi there! Are you a morning person or a night owl?",
            "Hey! I’m curious, what’s your idea of a perfect day?",
            "Hello! What’s the most interesting fact you know?",
            "Hi! Do you enjoy cooking? What’s your signature dish?",
            "Hey there! Are you into sports? What’s your favorite to watch or play?",
            "Hi! What’s a song that you have on repeat these days?",
            "Hello! Are you an animal lover? Do you have pets?",
            "Hi! Your profile picture is amazing. Where was it taken?",
            "Hello! I see you're into coding. Got any tips for a beginner?",
            "Hi there! Came across your profile and thought you seem interesting. What’s your favorite way to spend a weekend?",
            "Hi! Your taste in music is awesome. Who's your favorite artist right now?",
            "Hello! I’m always looking to meet new people. What’s something exciting you’ve done recently?",
            "Hey! I’m curious, what’s one movie or book that changed your life?",
            "Hi! If you could wake up tomorrow having gained one quality or ability, what would it be?",
            "Hello! Do you have a go-to fun fact about yourself?",
            "Hey there! What’s a hobby or activity you’ve been wanting to try but haven’t yet?",
            "Hi! Is there a cause or issue you’re really passionate about?",
            "Hello! What’s the most spontaneous thing you’ve ever done?",
            "Hey! What’s something you’re proud of but never have an excuse to talk about?",
            "Hi! If you could live anywhere in the world for a year, where would it be?",
            "Hello! I’m looking to expand my horizons. What’s one thing you think everyone should try at least once?",
            "Hey! What’s a simple thing that makes you smile?",
            "Hi there! What’s something you’re looking forward to in the near future?",
            "Hello! What’s your favorite way to unwind after a busy day?",
            "Hey! I’m always curious about what drives people. What’s your biggest motivation?",
            "Hi! Came across your profile and was intrigued. What’s a passion of yours?",
            "Hello! Just diving in, but what's a movie you could watch over and over?",
            "Hey there! I’m always looking for book recommendations. Got any favorites?",
            "Hi! I'm curious, what’s something that made you smile today?",
            "Hey! I love discovering new music. What song do you have on repeat right now?",
            "Hello! If you could teleport anywhere this weekend, where would you go?",
            "Hi! I’m on a mission to try new cuisines. What’s your favorite food?",
            "Hey! In the spirit of getting to know each other, what's a hobby you're really into?",
            "Hello! Quick question to start us off: beach or mountains?",
            "Hey there! What’s one thing you wish people knew about you?",
            "Hey! Do you have a favorite quote or saying that inspires you?",
            "Hi there! What’s a simple pleasure that makes your day better?"
        ];

        const index = Math.floor(Math.random() * 50);
        const newIcebreakerMsg = iceBreakerLib[index];

        e.preventDefault();

        try {
            const token = localStorage.getItem('token');

            const payload = {
                body: newIcebreakerMsg,
                convoID: currChat,
                burnAfterRead: burnAfter,
            };
            const uploadedFiles = selectedFiles.length > 0 ? await uploadFiles() : [];

            const fileKeys = uploadedFiles.map(file => file.objectKey).filter(key => key !== undefined);

            if (fileKeys.length > 0) {
                payload.mediaLink = fileKeys;
            }
            const res = await fetch(`${serverURL}:${serverPort}/api/message/postMessage`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            setMessages([...messages, data]);
            setNewMessage("");
            setImagePreviews([]);
            setSelectedFiles([]);
        } catch (err) {
            console.error("Error submitting message:", err);
        }
    };

    return (
        <div>
            <Header />
            <NavBar />
            <TwinklingBackground />
            <div className='title' style={{ color: 'white', textAlign: 'center', padding: '10px' }}>Messages</div>
            <div className="finally" style={{ height: '100vh', display: 'flex', color: 'white' }}>
                <div className="chatMenu">
                    <div className='chatMenuWrapper'>

                    <div className='conversation'>
                        {convos.map((convo) => (
                            <div
                                key={convo._id}
                                className={`conversation-box ${currChat === convo._id ? 'active-convo' : ''}`}
                                onClick={() => setCurrChat(convo._id)}
                            >
                                {convo.imageURLs.length > 0 ? (
                                    <img src={convo.imageURLs} alt={convo.username} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
                                ) : (
                                    <Avatar name={convo.username} round={true} size="50" />
                                )}
                                <span className='conversationName'>{convo.username}</span>
                            </div>
                        ))}
                    </div>

                    </div>
                </div>
                <div className='chatBox'>
                    <div className='chatBoxWrapper'>
                        {currChat && messages ? (
                            <>
                                <div className='chatBoxTop' ref={chatBoxTopRef}>
                                    {messages.map((m) => (
                                        <Messages key={m._id} message={m} own={m.from === theUser} burn={m.burnAfterRead} mediaLinks={m.imageURLs} onDelete={() => handleDeleteMessage(m._id)} />
                                    ))}
                                </div>
                                <div className="imagesAndBottom">
                                    <div className="imagePreviews">
                                        {imagePreviews.map((preview, index) => (
                                            <div key={index} className="imagePreview">
                                                <img src={preview.url} alt={preview.name} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='chatBoxBottom'>
                                        <textarea className="chatMessageInput" placeholder='Send a new message...' onChange={(e) => setNewMessage(e.target.value)} value={newMessage}></textarea>
                                        <label htmlFor="fileInput" className="fileInputLabel">Add Attachments</label>
                                        <input type="file" id="fileInput" multiple className="fileInput" onChange={handleFileChange} />
                                        <div className='buttonAndBurn'>
                                            <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                                            <button className="iceBreakerMainButton" onClick={sendRandomIceBreaker}>Ice Breaker</button>
                                            <div>
                                                <input
                                                    id="burnCheckbox"
                                                    type="checkbox"
                                                    checked={burnAfter}
                                                    onChange={(e) => setBurn(e.target.checked)}
                                                />
                                                <label htmlFor="burnCheckbox">Burn after read</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <span>Open a conversation to start</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Finally;
