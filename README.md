# HTML Chat Widget Plugin

A simple, drop-in chat widget for any HTML website.

## Live Demo
Check out the **[Live Preview Here](https://sdk.manikantadarapureddy.in/)**.

---

## How to Use

### Step 1: Add CSS
Add this line inside the `<head>` tag of your HTML file:
```html
<link rel="stylesheet" href="https://sdk.manikantadarapureddy.in/chat-ui-widget.css">
```

### Step 2: Add Container
Add this empty `div` where you want the widget to appear (usually inside `<body>`):
```html
<div id="chat-widget"></div>
```

### Step 3: Add Script
Add this line at the end of your `<body>` tag:
```html
<script src="https://sdk.manikantadarapureddy.in/chat-ui-widget.js"></script>
```

### Step 4: Initialize Widget
Add this script after the previous one to start the chat:

```html
<script>
        window.mountChatUI('chat-widget', {
            endpoint: 'https://your-api-endpoint.com/chat', // YOUR API URL
            title: 'Support Chat',
            welcomeMessage: 'Hello! How can we help you today?',
            description: 'We typically reply in a few minutes.',
            inputPlaceholder: 'Type your message...',
            logoSrc: 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
            soundSrc: '', 
            footerText: 'Powered by Custom RAG',
            position: 'right' // 'left' or 'right'
        });
</script>
```

---

## Available Props

| Prop | Type | Required | Default | Description |
|------|------|:--------:|---------|-------------|
| `endpoint` | `string` | ✅ | - | The backend API URL for sending chat requests. |
| `logoSrc` | `string` | ❌ | `DEFAULT_LOGO` | URL for the chatbot avatar/logo image. |
| `soundSrc` | `string` | ❌ | `DEFAULT_SOUND` | URL for the notification sound played when a message arrives. |
| `title` | `string` | ❌ | `"AI Assistant"` | The title displayed in the chat header. |
| `welcomeMessage` | `string` | ❌ | `"Welcome..."` | The initial greeting message shown in the notification bubble. |
| `description` | `string` | ❌ | `"I'm here..."` | A short description text under the welcome message. |
| `footerText` | `ReactNode` | ❌ | `Default Footer` | Custom text or JSX to display in the footer of the chat window. |
| `inputPlaceholder` | `string` | ❌ | `"Message"` | Placeholder text for the input text area. |
| `theme` | `string` | ❌ | `"light"` | The color theme of the chat widget (`"light"`, `"dark"`, or `"auto"`). |
| `position` | `string` | ❌ | `"right"` | The position of the chat widget on the screen (`"left"` or `"right"`). |

## 🧠 Configure RAG Pipeline

To make your chatbot intelligent and capable of answering questions based on your specific data (like your website content, personal pages, or documentation), you need to set up a RAG (Retrieval-Augmented Generation) pipeline.

This **Chat UI** handles the frontend experience. For the backend and to integrate your own data sources:

1.  **Visit**: [services.dmanikanta.me](https://services.dmanikanta.me)
2.  **Select Integration**: Choose the type of integration you need (Website, Personal Portfolio, Documentation, etc.).
3.  **Get Endpoint**: Once configured, you will receive a unique API endpoint.
4.  **Connect**: Pass that endpoint to the HTML component as shown in the usage section.

This service allows you to easily transform your static content into an interactive AI agent.

## 🤝 Support

For support or questions, please contact me at: **darapureddymanikanta8@gmail.com**

---
Made with 💛 by [Manikanta Darapureddy](https://www.dmanikanta.me)


