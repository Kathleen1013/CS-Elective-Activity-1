function StudentProfileCard({ name, course, section }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", width: "220px" }}>
      <h3>{name}</h3>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Section:</strong> {section}</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <h1>Student Profile Cards</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <StudentProfileCard
          name="Ramuda"
          course="BS Rap Battle"
          section="Fling Posse"
        />
        <StudentProfileCard
          name="Venti"
          course="BS Archon"
          section="Original"
        />
        <StudentProfileCard
          name="Octavio"
          course="BS Vtubing"
          section="Armis Unit"
        />
      </div>
    </div>
  );
}