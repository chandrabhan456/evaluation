import { useEffect, useState } from "react";
 
const useWebSocket = (url) => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const socket = new WebSocket(url);
 
    socket.onopen = () => console.log("WebSocket connected");
socket.onmessage = (event) => setData(JSON.parse(event.data));
    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket disconnected");
 
    return () => socket.close(); // Cleanup
  }, [url]);
 
  return data;
};
 
const WebSocket1 = () => {
  const streamingData = useWebSocket("ws://localhost:8000/ws");
 
  return (
    <div>
      <h1>Streaming Data:</h1>
      <pre>{JSON.stringify(streamingData, null, 2)}</pre>
    </div>
  );
};
 
export default WebSocket1;