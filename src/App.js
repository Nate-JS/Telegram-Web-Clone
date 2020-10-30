import React from "react";
import "./App.css";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <ChatList />
      <Chat />
    </div>
  );
}

export default App;
