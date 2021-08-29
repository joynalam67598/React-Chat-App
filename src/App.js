import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="6d709f25-7262-4da0-a9d2-6a3176ddc073"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // customize middle field chat feed
            // Sepred all the porps comming from the chatengine 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }

        />
    );
}

export default App;
