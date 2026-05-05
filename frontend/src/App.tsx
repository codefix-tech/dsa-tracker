import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ProblemList from "./components/ProblemList";

type Problem = {
  title: string;
  done: boolean;
};

type Topic = {
  topic: string;
  problems: Problem[];
};

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  // ✅ GET API
  useEffect(() => {
    fetch("http://localhost:8080/api/problems")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA:", data);
        setTopics(data);
        setSelectedTopic(0);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ PUT API
  const toggleDone = (index: number) => {
    fetch(
      `http://localhost:8080/api/problems/${selectedTopic}/${index}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      <ProblemList
        topics={topics}
        selectedTopic={selectedTopic}
        toggleDone={toggleDone}
      />
    </div>
  );
}

export default App;