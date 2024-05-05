import { useState, useEffect } from "react";
import "./styles.css";
import downArrow from "../../images/downArrow.png";
import { Link } from "react-router-dom";

export default function Analysis() {
  const [transcript, setTranscript] = useState({
    response_1: "",
    response_2: "",
    response_3: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a fetch request to your backend API
        const url = localStorage.getItem("url");
        const response = await fetch(
          `http://127.0.0.1:8000/api/url/${url.substring(30)}`
        );

        // Parse the JSON response
        const result = await response.json();

        const prompt = await fetch(
          `http://127.0.0.1:8000/api/prompt/${result}`
        );

        // Parse the JSON response
        const result2 = await prompt.json();

        // Update the state with the fetched data
        setTranscript(result2);
      } catch (error) {
        // Handle any errors
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="return-container">
        <Link to="/">
          <img className="arrow" src={downArrow} width="40px" height="38px" />
        </Link>
      </div>

      <div className="container">
        <div className="box">
          <div className="item">
            <a className="link">
              <div className="item_bg"></div>
              <div className="title">
                SYNOPSIS
                <div className="text-box">
                  <span className="ai-content">{transcript.response_1}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="item">
            <a className="link">
              <div className="item_bg"></div>
              <div className="title">
                ANALYSIS
                <div className="text-box">
                  <span className="ai-content">{transcript.response_2}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="item">
            <a className="link">
              <div className="item_bg"></div>
              <div className="title">
                RESOURCES
                <div className="text-box">
                  <span className="ai-content">{transcript.response_3}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
