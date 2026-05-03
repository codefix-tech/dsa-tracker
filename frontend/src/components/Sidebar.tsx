function Sidebar({ topics, selectedTopic, setSelectedTopic }: any) {
  if (!topics || topics.length === 0) {
    return <div style={{ padding: "20px" }}>Loading...</div>;
  }

  return (
    <div style={{ width: "250px", background: "#111", color: "#fff", padding: "20px" }}>
      <h2>Topics</h2>

      {topics.map((t: any, index: number) => (
        <div
          key={index}
          onClick={() => setSelectedTopic(index)}
          style={{
            padding: "10px",
            cursor: "pointer",
            background: selectedTopic === index ? "#333" : "transparent"
          }}
        >
          {t.topic}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;