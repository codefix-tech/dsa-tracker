type Problem = {
  title: string;
  done: boolean;
};

type Topic = {
  topic: string;
  problems: Problem[];
};

type ProblemListProps = {
  topics: Topic[];
  selectedTopic: number;
  toggleDone: (index: number) => void;
};

function ProblemList({
  topics,
  selectedTopic,
  toggleDone,
}: ProblemListProps) {
  const current = topics[selectedTopic];

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <h2>{current.topic}</h2>

      {current.problems.map((p, i) => (
        <div
          key={i}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: p.done ? "#d4edda" : "#fff",
          }}
        >
          {p.title}

          <button
            onClick={() => toggleDone(i)}
            style={{ marginLeft: "10px" }}
          >
            {p.done ? "Undo" : "Done"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProblemList;