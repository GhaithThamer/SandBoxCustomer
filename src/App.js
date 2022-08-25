import "./styles.css";
import List from "./List.js";

export default function App() {
  const customerList = [
    "INGOLSTUD",
    "ULM",
    "DH",
    "ROSENHEIM",
    "BERLIN",
    "MAGDEBURG",
    "ALTENBURG",
    "KÖLN",
    "CHRONENBERG"
  ];
  return (
    <div className="App">
      <h1>DM PVC</h1>
      <h2>Customers</h2>
      <List items={customerList} />
    </div>
  );
}
