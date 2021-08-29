import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="xxxxx-xxxx-xxx--xx-xxx---xxxx"
            userName="Rakib"
            userSecret="123123"
            // customize middle field chat feed
            // Sepred all the porps comming from the chatengine 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }

        />
    );
}

export default App;
