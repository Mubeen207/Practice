import "./App.css";
import Counter from "./feathers/counter/Counter";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div>
        <Counter />

        <p className="text-center mt-4 text-lg font-semibold text-gray-700">
          Your Count Value is
          <span className="ml-2 px-3 py-1 rounded-lg bg-green-100 text-green-700 font-bold shadow-sm">
            {count}
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
