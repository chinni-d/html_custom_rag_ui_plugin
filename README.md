# HTML Chat Widget Plugin

A simple, drop-in chat widget for any HTML website.

## Live Demo
Check out the **[Live Preview Here](https://dmanikanta-ai-plugin.vercel.app/)**.

---

## How to Use

### Step 1: Add CSS
Add this line inside the `<head>` tag of your HTML file:
```html
<link rel="stylesheet" href="https://dmanikanta-ai-plugin.vercel.app/chat-ui-widget.css">
```

### Step 2: Add Container
Add this empty `div` where you want the widget to appear (usually inside `<body>`):
```html
<div id="chat-widget"></div>
```

### Step 3: Add Script
Add this line at the end of your `<body>` tag:
```html
<script src="https://dmanikanta-ai-plugin.vercel.app/chat-ui-widget.js"></script>
```

### Step 4: Initialize Widget
Add this script after the previous one to start the chat:

```html
<script>
    document.addEventListener('DOMContentLoaded', () => {
        if (window.mountChatUI) {
            window.mountChatUI('chat-widget', {
                endpoint: 'https://your-api-endpoint.com/chat', // YOUR API URL
                title: 'Support Chat',
                welcomeMessage: 'Hello! How can we help you today?',
                description: 'We typically reply in a few minutes.',
                inputPlaceholder: 'Type your message...',
                logoSrc: 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
                soundSrc: '', // Optional: URL for receive message sound
                footerText: 'Powered by Custom RAG'
            });
        }
    });
</script>
```

---

## Available Props

| Prop | Type | Description |
|------|------|-------------|
| `endpoint` | String | **Required**. The API URL where messages are sent. |
| `title` | String | Title displayed at the top of the chat window. |
| `welcomeMessage` | String | Initial message shown to the user. |
| `description` | String | Subtitle or status text under the title. |
| `inputPlaceholder`| String | Placeholder text for the input box. |
| `logoSrc` | String | URL for the avatar/logo image. |
| `soundSrc` | String | URL for a sound file to play on new messages. |
| `footerText` | String | Text displayed at the very bottom of the chat. |
