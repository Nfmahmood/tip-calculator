import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);

  const tip = bill * (percentage / 100);

  function handleReset() {
    setBill("");
    setPercentage(0);
  }

  return (
    <div className="calculator">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage} onSelect={setPercentage}>
        How did you like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="input-group">
      <label>How much was the bill?</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="input-group">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Poor - 0%</option>
        <option value="5">Average - 5%</option>
        <option value="10">Good - 10%</option>
        <option value="20">Excellent - 20%</option>
        <option value="custom">Custom tip</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3 className="output">
      You pay ${Math.round(bill + tip)} (${bill} + ${Math.round(tip)} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <button className="reset-btn" onClick={onReset}>
      Reset
    </button>
  );
}
