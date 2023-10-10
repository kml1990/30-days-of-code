# Web Sockets

WebSocket is a protocol that provides a full-duplex communication channel over a single, long-lived TCP connection. It allows for real-time, two-way communication between a client (typically a web browser) and a server. Unlike the traditional HTTP request-response model, where a client sends a request and the server responds, WebSocket enables continuous communication between the client and server.

## Key features of WebSockets include:

### 1. Full-duplex communication: Both the client and server can send and receive data at any time over the same WebSocket connection.

### 2. Low overhead: WebSocket has a smaller overhead compared to traditional HTTP requests because it eliminates the need for headers in each message, resulting in less data being transmitted.

### 3. Low-latency communication: WebSocket allows for low-latency communication because it avoids the overhead of establishing a new connection for each request.

### 4. Efficient for real-time applications: WebSockets are well-suited for applications that require real-time updates, such as online games, financial trading platforms, chat applications, and live streaming.

### 5. Cross-origin communication: WebSockets support cross-origin communication, meaning a client can establish a WebSocket connection with a server from a different domain.

WebSockets are commonly used in web applications to achieve real-time updates and interactions between the client and server. The WebSocket protocol starts with a handshake using HTTP and then upgrades to the WebSocket protocol, allowing for ongoing communication in a bidirectional and efficient manner.