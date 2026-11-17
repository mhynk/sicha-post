import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("Checking...");
  const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";
  
  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(`Server Connected · DB time ${data.db_time}`))
      .catch(() => setStatus("Server Connection Failed"));
  }, []);

  return (
    <main>
      <h1>시차우편</h1>
      <p>{status}</p>
    </main>
  );
}
