export default function InputGroup({ label, value, onChange, type = "text" }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: 8,
            marginTop: 5,
          }}
        />
      </label>
    </div>
  );
}
