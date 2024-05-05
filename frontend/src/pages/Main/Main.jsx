import { useState } from "react";
import "./styles.css";
import mic from "../../images/mic.png";
import { useNavigate } from "react-router-dom";

//   // Event listener for speech recognition results
//   recognition.onresult = (event) => {
//     let transcript = "";
//     for (let i = event.resultIndex; i < event.results.length; i++) {
//       if (event.results[i].isFinal) {
//         transcript += event.results[i][0].transcript;
//       }
//     }
//     textInput.value += transcript; // Append transcription to input field
//   };

//   // Event listener for speech recognition error
//   recognition.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//   };

export default function Main() {
  const navigate = useNavigate();
  const [url, setUrl] = useState();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      localStorage.setItem("url", url);
      navigate("/analysis");
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>
            View<span>rify</span>
          </h1>
          <div className="searchcontainer">
            <div className="searchbar">
              <label>
                <input
                  onKeyDown={handleKeyPress}
                  type="text,"
                  className="search"
                  id="textInput"
                  name="search"
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  placeholder="Enter URL"
                ></input>
              </label>
            </div>
            <div className="microphone" id="mic1">
              <button className="mic-button" id="mic">
                <img src={mic} width="15px" height="25px" />
              </button>
            </div>
          </div>

          <h3>no, eggs won't kill you...</h3>
        </div>
      </section>
    </div>
  );
}
