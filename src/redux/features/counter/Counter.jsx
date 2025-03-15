// src/features/counter/Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  // Access the current state value
  const count = useSelector((state) => state.counter.value);
  // Get the dispatch function to trigger actions
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex mt-4 space-x-2">
        <button
          className="cursor-pointer px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="cursor-pointer px-4 py-2 text-white bg-red-500 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="cursor-pointer px-4 py-2 text-white bg-green-500 rounded"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default Counter;
