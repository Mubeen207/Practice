import { useState } from "react";
const Display = () => {
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
  const [input, setInput] = useState("");
  const operators = ["+", "-", "÷", "*"];
  const [lastOp, setLastOp] = useState(false);
  const [flag, setFlag] = useState(true);
  const [chkEqal, setChkEqal] = useState(false);
  const [isDecimal, setIsDecimal] = useState(false);
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
  function ac() {
    setInput("");
    setFlag(true);
    setLastOp(false);
    setChkEqal(false);
    setIsDecimal(false);
  }
  const handleClick = (btn) => {
    if (btn === "=" && input === "") return;
    if (btn === "=" && operators.includes(input.at(-1))) return;
    if (btn === "C" || btn === "AC") {
      if (btn === "AC") {
        ac();
      } else {
        if (input === "Error") {
          ac();
        } else {
          const newValue = input.slice(0, -1);
          setInput(newValue);
          setLastOp(false);
          setIsDecimal(newValue.includes("."));
        }
      }
    } else if (btn === "=") {
      if (!flag) return;
      try {
        const expression = input.replace(/÷/g, "/");
        const result = String(eval(expression));
        setInput(result);
        setIsDecimal(result.includes("."));

        setFlag(false);
        setChkEqal(true);
      } catch {
        setInput("Error");
        setFlag(false);
        setChkEqal(true);
      }
    } else if (operators.includes(btn)) {
      if (input === "") return;
      if (lastOp) return;
      setInput((prev) => prev + btn);
      setLastOp(true);
      setChkEqal(false);
      setIsDecimal(false);
    } else {
      if (btn === ".") {
        if (isDecimal) return;
        setIsDecimal(true);
      }
      if (chkEqal) {
        ac();
        setChkEqal(false);
        setFlag(true);
      }
      if (input === "" && btn === ".") {
        setInput((prev) => prev + "0" + btn);
        setLastOp(false);
        setFlag(true);
      } else {
        setInput((prev) => prev + btn);
        setLastOp(false);
        setFlag(true);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#F3F4F6] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-white">
      <div className="mb-8 p-6 bg-white rounded-[2rem] shadow-[inset_0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
        <input
          type="text"
          className="w-full bg-transparent text-gray-800 text-5xl font-light text-right focus:outline-none 
                 overflow-x-auto whitespace-nowrap scrollbar-hide"
          value={input}
          readOnly
          ref={(el) => {
            if (el) el.scrollLeft = el.scrollWidth;
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {buttons.map((btn, idx) => {
          const isOperator = ["+", "-", "*", "/", "="].includes(btn);
          const isClear = btn === "AC" || btn === "C";

          return (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className={`
            h-20 rounded-[1.5rem] text-2xl font-medium transition-all duration-200 active:scale-95
            ${isClear ? "col-span-2" : "col-span-1"} 
            ${
              isOperator
                ? "bg-orange-500 text-white shadow-[0_8px_16px_rgba(249,115,22,0.3)] hover:bg-orange-600"
                : isClear
                ? "bg-gray-800 text-white shadow-lg hover:bg-black" 
                : "bg-white text-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.08)] border border-gray-50 hover:bg-gray-50"
            }
          `}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
