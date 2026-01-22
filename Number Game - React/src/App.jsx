import { useEffect, useState } from "react";
import "./App.css";
import NumberBox from "./components/NumberBox ";

function App() {
  const [isFirstIndex, setIsFirstIndex] = useState([]);
  const [isSecondIndex, setIsSecondIndex] = useState([]);
  const [isThirdIndex, setIsThirdIndex] = useState([]);
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const [handleShowNumber, setHandleShowNumber] = useState(false);
  let temp = [];
  useEffect(() => {
    if (flag) {
      const temp = [];
      while (temp.length < 21) {
        let random = Math.ceil(Math.random() * 99);
        if (!temp.includes(random)) {
          temp.push(random);
        }
      }
      setArr(temp);
      setFlag(false);
    }
  }, [flag]);

  temp = [];
  useEffect(() => {
    if (count < 4) {
      for (let i = 0; i < arr.length; i += 3) {
        temp.push(arr[i]);
      }
      setIsFirstIndex(temp);
      temp = [];
      for (let i = 1; i < arr.length; i += 3) {
        temp.push(arr[i]);
      }
      setIsSecondIndex(temp);
      temp = [];
      for (let i = 2; i < arr.length; i += 3) {
        temp.push(arr[i]);
      }
      setIsThirdIndex(temp);
      temp = [];
      console.log(count);

      if (count === 3) setHandleShowNumber(true);
    }
  }, [arr]);

  const arrManage = (arrNum) => {
    if (arrNum === 1) {
      setArr([...isThirdIndex, ...isFirstIndex, ...isSecondIndex]);
    } else if (arrNum === 2) {
      setArr([...isThirdIndex, ...isSecondIndex, ...isFirstIndex]);
    } else {
      setArr([...isSecondIndex, ...isThirdIndex, ...isFirstIndex]);
    }
    setCount((count) => count + 1);
  };
  const handlePlayAgain = () => {
    setArr([]);
    setCount(0);
    setFlag(true);
    setHandleShowNumber(false);
  };
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <div
            onClick={() => arrManage(1)}
            className="cursor-pointer flex flex-wrap  justify-center items-center gap-2 p-4 rounded-md bg-green-600 hover:bg-green-700 transition max-w-xs w-full sm:w-auto"
          >
            {isFirstIndex.map((num, idx) => (
              <p
                key={idx}
                className="w-8 h-8 flex justify-center items-center bg-white rounded shadow text-green-800 font-semibold text-sm"
              >
                {num}
              </p>
            ))}
          </div>

          <div
            onClick={() => arrManage(2)}
            className="cursor-pointer flex flex-wrap  justify-center items-center gap-2 p-4 rounded-md bg-red-500 hover:bg-red-600 transition max-w-xs w-full sm:w-auto"
          >
            {isSecondIndex.map((num, idx) => (
              <p
                key={idx}
                className="w-8 h-8 flex justify-center items-center bg-white rounded shadow text-red-800 font-semibold text-sm"
              >
                {num}
              </p>
            ))}
          </div>

          <div
            onClick={() => arrManage(3)}
            className="cursor-pointer flex flex-wrap justify-center items-center gap-2 p-4 rounded-md bg-blue-600 hover:bg-blue-700 transition max-w-xs w-full sm:w-auto"
          >
            {isThirdIndex.map((num, idx) => (
              <p
                key={idx}
                className="w-8 h-8 flex justify-center items-center bg-white rounded shadow text-blue-900 font-semibold text-sm"
              >
                {num}
              </p>
            ))}
          </div>
        </div>

        {count === 0 && (
          <p className="text-center text-lg font-medium text-gray-700 p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
            Select the box that has your number
          </p>
        )}
        {count === 1 && (
          <p className="text-center text-lg font-medium text-gray-700 p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
            Select one more time
          </p>
        )}
        {count === 2 && (
          <p className="text-center text-lg font-medium text-gray-700 p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
            Now select a box and see your number
          </p>
        )}
      </div>

      {handleShowNumber && (
        <NumberBox number={isSecondIndex[3]} onPlayAgain={handlePlayAgain} />
      )}
    </>
  );
}

export default App;
