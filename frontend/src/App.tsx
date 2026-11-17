import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("확인 중...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data) => setStatus(`서버 연결됨 · DB 시간 ${data.db_time}`))
      .catch(() => setStatus("서버 연결 실패"));
  }, []);

  return (
    <main>
      <h1>시차우편</h1>
      <p>{status}</p>
    </main>
  );
}
