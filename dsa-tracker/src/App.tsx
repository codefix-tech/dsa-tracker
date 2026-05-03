import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProblemList from "./components/ProblemList";

// Types
type Problem = {
  title: string;
  done: boolean;
};

type Topic = {
  topic: string;
  problems: Problem[];
};

function App() {
  const [topics, setTopics] = useState<Topic[]>([
    {
      topic: "Arrays",
      problems: [
        { title: "Two Sum", done: false },
        { title: "Kadane's Algorithm", done: false },
      ],
    },
    {
      topic: "Strings",
      problems: [{ title: "Palindrome Check", done: false }],
    },
  ]);

  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const toggleDone = (index: number) => {
    const updated = [...topics];
    updated[selectedTopic].problems[index].done =
      !updated[selectedTopic].problems[index].done;
    setTopics(updated);
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