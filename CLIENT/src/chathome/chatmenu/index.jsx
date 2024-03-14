import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Contacts from './contacts';
import './style.css';
import { allusersroute, host } from '../../utils/apiroutes';
import contactload from './contactload.gif';
import Header from './header';
import Welcome from './CHATBOX/nochat';
import Chat from './CHATBOX/chat';
import {Socket, io } from 'socket.io-client'; 
import Videocall from './CHATBOX/videocall';

const Chatmenu = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentuser, setCurrentUser] = useState(undefined);
  const [currentusername, setCurrentUsername] = useState(undefined);
  const [currentuserimage, setCurrentUserImage] = useState(undefined);
  const [currentuseremail, setCurrentUserEmail] = useState(undefined);
  const [currentchat, setCurrentChat] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleImageCapture = (image) => {
    setCapturedImage(image);
  };

  useEffect(() => {
    async function setUserFunc() {
      if (!localStorage.getItem('chat-nexus-user')) {
        navigate('/login');
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem('chat-nexus-user')));
      }
    }
    setUserFunc();
  }, []);

  useEffect(() => {
    if (currentuser) {
      const socket = io(host);
      socket.emit('add-user', currentuser._id);
    }
  }, [currentuser]);

  useEffect(() => {
    setContactFunc();
  }, [currentuser]);

  async function setContactFunc() {
    if (currentuser) {
      try {
        const response = await axios.get(`${allusersroute}/${currentuser._id}`);
        setContacts(response.data);
        setCurrentUsername(currentuser.username);
        setCurrentUserImage(currentuser.photo);
        setCurrentUserEmail(currentuser.email);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };



  return (
    <div className="chatcontainer" id="captureElement" >
      {loading && (
        <div className="contactbody">
          <img src={contactload} alt="loader" />
        </div>
      )}
      <Header  className="headersect" currentusername={currentusername} currentuserimage={currentuserimage} currentuseremail={currentuseremail} />
      <Contacts  className="searchresult" contacts={contacts} chatchange={handleChatChange} currentuser={currentuser} />
      <Videocall   currentusername={currentusername} onImageCapture={handleImageCapture}/>
      {currentchat === undefined ? <Welcome /> : <Chat className="chatpage"  currentchat={currentchat} capturedImage={capturedImage} currentuser={currentuser} Socket={Socket} />}

    </div>
  );
};

export default Chatmenu;
