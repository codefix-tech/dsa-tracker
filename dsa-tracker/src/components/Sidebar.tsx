type Topic = {
  topic: string;
  problems: {
    title: string;
    done: boolean;
  }[];
};

type SidebarProps = {
  topics: Topic[];
  selectedTopic: number;
  setSelectedTopic: (index: number) => void;
};

function Sidebar({ topics, selectedTopic, setSelectedTopic }: SidebarProps) {
  return (
    <div
      style={{
        width: "250px",
        background: "#111",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2>Topics</h2>

      {topics.map((t, index) => (
        <div
          key={index}
          onClick={() => setSelectedTopic(index)}
          style={{
            padding: "10px",
            cursor: "pointer",
            background: selectedTopic === index ? "#333" : "transparent",
          }}
        >
          {t.topic}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;