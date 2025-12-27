import { useState } from "react";

const Display = () => {
  const [input, setInput] = useState("");

  const buttons = [
    7,
    8,
    9,
    "÷",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "=",
    "+",
    "C",
    "AC",
  ];
  const operators = ["+", "-", "÷", "*", "."];
  const [lastOp, setLastOp] = useState(false);
  const [flag, setFlag] = useState(true);
  const [chkEqal, setChkEqal] = useState(false);
  {
    //   const handleClick = (btn) => {
    //     if (btn === "=") {
    //       try {
    //         // Replace ÷ and * symbols for eval to work
    //         const expression = input.replace(/÷/g, "/").replace(/ \*/g, "*");
    //         // eslint-disable-next-line no-eval
    //         console.log(expression);
    //         const result = eval(expression);
    //         setInput(String(result));
    //       } catch {
    //         setInput("Error");
    //       }
    //     } else {
    //       setInput((prev) => prev + btn);
    //     }
    //   };
  }
  const handleClick = (btn) => {
    if (btn === "C" || btn === "AC") {
      if (btn === "AC") {
        setInput("");
      } else {
        try {
          if (input === "Error") {
            setInput("");
            // yahan error a raha hai
            console.log("Hello");
            
          }
          setInput(input.slice(0, -1));
        } catch {
          setInput("Error");
        }
      }
    } else if (btn === "=") {
      if (!flag) return;
      try {
        setInput(eval(input));
        setFlag(false);
        setChkEqal(true);
      } catch {
        setInput("Error");
        setFlag(false);
        setChkEqal(true);
      }
    } else if (operators.includes(btn)) {
      if (lastOp) return;
      setInput((prev) => prev + btn);
      setLastOp(true);
    } else {
      if (chkEqal) {
        setInput("");
        setChkEqal(false);
        setFlag(true);
      }
      setInput((prev) => prev + btn);
      setLastOp(false);
    }
  };

  return (
    <div className="border p-4 flex flex-col max-w-md mx-auto">
      <input
        type="text"
        className="border p-2 mb-4 text-right text-2xl"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(btn)}
            className="bg-gray-200 hover:bg-gray-300 rounded py-4 text-xl font-semibold"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Display;
