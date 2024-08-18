### Network Protocols Overview

#### **Application Layer**

1. **Client-Server Protocols**

   - **HTTP (HyperText Transfer Protocol)**:

     - **Connection Type**: 1 Connection
     - **Communication**: Request <-> Response
     - **Use Case**: Web browsing, where the browser (client) sends an HTTP request and the server responds with the requested content. After the response, the connection is typically closed.

   - **FTP (File Transfer Protocol)**:

     - **Connection Type**: 2 Connections (Control connection, Data connection)
     - **Communication**: File transfer between a client and server.
     - **Use Case**: Uploading or downloading files from a server.

   - **SMTP (Simple Mail Transfer Protocol) / IMAP (Internet Message Access Protocol)**:

     - **SMTP**: Sending email
     - **IMAP**: Reading/Accessing email from the server
     - **Use Case**: Email clients sending (SMTP) and retrieving (IMAP) messages.

   - **WebSockets**:
     - **Connection Type**: Persistent
     - **Communication**: Bidirectional
     - **Use Case**: Messaging apps like WhatsApp, Telegram, where real-time communication is required.

2. **Peer-to-Peer Protocol**
   - **WebRTC (Web Real-Time Communication)**:
     - **Connection Type**: Direct, Peer-to-Peer
     - **Communication**: Real-time audio, video, and data sharing between peers.
     - **Use Case**: Video calling apps like Google Meet, Zoom, where direct communication between users is necessary.

#### **Transport Layer**

1. **TCP/IP (Transmission Control Protocol / Internet Protocol)**

   - **Type**: Connection-oriented
   - **Communication**: Reliable, ordered, and error-checked delivery of a stream of data between applications.
   - **Use Case**: Web browsing, file transfers, email transmission, where data integrity and reliability are critical.

2. **UDP (User Datagram Protocol)**
   - **Type**: Connectionless
   - **Communication**: Unreliable, unordered, and faster transmission of data, no guarantee of delivery.
   - **Use Case**: Streaming media (e.g., video/audio), online gaming, where speed is more important than reliability.
