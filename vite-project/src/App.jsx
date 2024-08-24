import { useState } from "react";

function App() {
  const [color, setColor] = useState("Red");
  return (
    <>
      <div
        className="h-screen w-full flex items-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col bg-white rounded-xl p-3 w-24 h-96 justify-between">
          <button
            className="bg-red-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-red-800"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-green-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-green-800"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-blue-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-blue-800"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="bg-orange-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-orange-800"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="bg-gray-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-gray-800"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="bg-yellow-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-yellow-800"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-pink-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-pink-800"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="bg-purple-600 p-1 rounded-xl w-16 text-white shadow-lg hover:bg-purple-800"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="bg-black p-1 rounded-xl w-16 text-white shadow-lg hover:bg-black"
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
