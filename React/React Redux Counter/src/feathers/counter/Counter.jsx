import { useSelector, useDispatch } from "react-redux";
import {
  incriment,
  decrement,
  incrimentByAmount,
  multiplay,
} from "./counterSlice";
let Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="flex gap-3 bg-white p-4 rounded-xl shadow-lg">
          <button
            onClick={() => dispatch(incriment())}
            className="w-12 h-12 rounded-lg bg-green-100 text-green-700 font-bold text-xl
                 hover:bg-green-600 hover:text-white
                 active:scale-95 transition-all duration-200"
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="w-12 h-12 rounded-lg bg-red-100 text-red-600 font-bold text-xl
                 hover:bg-red-600 hover:text-white
                 active:scale-95 transition-all duration-200"
          >
            −
          </button>

          <button
            onClick={() => dispatch(multiplay())}
            className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 font-bold text-xl
                 hover:bg-blue-600 hover:text-white
                 active:scale-95 transition-all duration-200"
          >
            ×
          </button>

          <button
            onClick={() => dispatch(incrimentByAmount(count))}
            className="px-5 h-12 rounded-lg bg-purple-100 text-purple-700 font-semibold
                 hover:bg-purple-600 hover:text-white
                 active:scale-95 transition-all duration-200"
          >
            Double
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
