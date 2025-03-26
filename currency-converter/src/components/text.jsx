import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {InputBox} from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const baseUrl = "https://open.er-api.com/v6/latest";
  const [data, setData] = useState(null); // Initialize as null
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data);
      setData(response.data); // Set data from the API response
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="App">
        {error && <p>{error}</p>} {/* Display error if any */}
        <pre>
          {data ? JSON.stringify(data["rates"], null, 2) : "Loading..."}
        </pre>
      </div>

      <InputBox />
    </>
  );
}

export default App;
