import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatUI, ChatUIProps } from '@dmanikanta17/chat-ui';
import './widget.css';

// Define the global function signature
declare global {
  interface Window {
    mountChatUI: (elementId: string, props: ChatUIProps) => void;
  }
}

// The mount function
window.mountChatUI = (elementId: string, props: ChatUIProps) => {
  const el = document.getElementById(elementId);
  if (el) {
    const root = ReactDOM.createRoot(el);
    root.render(
      <React.StrictMode>
        <div id="chat-ui-scope">
          <ChatUI {...props} />
        </div>
      </React.StrictMode>
    );
  } else {
    console.error(`ChatUIWidget: Element with id '${elementId}' not found.`);
  }
};
