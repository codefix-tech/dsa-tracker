function ProblemList({ topics, selectedTopic, toggleDone }: any) {
  if (!topics || topics.length === 0) {
    return <div style={{ padding: "20px" }}>Loading...</div>;
  }

  const current = topics[selectedTopic];

  if (!current) {
    return <div>No topic found</div>;
  }

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <h2>{current.topic}</h2>

      {current.problems.map((p: any, i: number) => (
        <div key={i}>
          {p.title}
          <button onClick={() => toggleDone(i)}>
            {p.done ? "Undo" : "Done"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProblemList;