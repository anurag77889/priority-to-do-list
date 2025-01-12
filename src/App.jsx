import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchAdvice = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setAdvice(data.slip.advice))
        .catch((error) => console.error("Error fetching advice: ", error));
    };

    fetchAdvice();
  }, [fetchTrigger]);

  const handleFetchNewAdvice = () => setFetchTrigger((prev) => prev + 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Random Advice Generator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center">
        <p className="text-xl mb-4">{advice || "Loading advice..."}</p>
        <button
          onClick={handleFetchNewAdvice}
          className="mt-4 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
        >
          Get New Advice
        </button>
      </div>
    </div>
  );
}

export default App;
