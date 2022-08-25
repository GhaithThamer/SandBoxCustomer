import "./styles.css";
import Customer from "./Customer.js";

export default function App() {
  const customerList = [
    "INGOLSTUD",
    "ULM",
    "DH",
    "ROSENHEIM",
    "BERLIN",
    "MAGDEBURG",
    "ALTENBURG"
  ];
  return (
    <div className="App">
      <h1>DM PVC</h1>
      <h2>Customers</h2>
      <Customer items={customerList} />
    </div>
  );
}
