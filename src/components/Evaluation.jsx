import React, { useState } from "react";
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";

const Evaluation1 = () => {
  const techniquesData = [
    { id: 1, name: "Technique 1", description: "Description for Technique 1" },
    { id: 2, name: "Technique 2", description: "Description for Technique 2" },
    { id: 3, name: "Technique 3", description: "Description for Technique 3" },
    { id: 4, name: "Technique 4", description: "Description for Technique 4" },
    { id: 5, name: "Technique 5", description: "Description for Technique 5" },
    { id: 6, name: "Technique 6", description: "Description for Technique 6" },
    { id: 7, name: "Technique 7", description: "Description for Technique 7" },
  ];

  const [selectedTechniques, setSelectedTechniques] = useState([techniquesData[0].name, techniquesData[1].name]);
  const [userInput, setUserInput] = useState("");

  const toggleTechnique = (techniqueName) => {
    setSelectedTechniques((prev) => {
      if (prev.includes(techniqueName)) {
        return prev.filter((item) => item !== techniqueName);
      } else if (prev.length < 2) {
        return [...prev, techniqueName];
      }
      return prev;
    });
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendClick = () => {
    console.log("Message sent:", userInput);
    setUserInput(""); // Clear input after sending
  };

  return (
    <div className="app-container">
     
 
      <div className="sidebar">
        <div className="sidebarContent">
        <button className="home-button">Home</button>
        <button className="home-button mt-2">Vector DB</button>
        <ul>
          {techniquesData.map((technique) => (
            <li key={technique.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedTechniques.includes(technique.name)}
                  onChange={() => toggleTechnique(technique.name)}
                />
                {technique.name}
              </label>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="content">
        <div className="input-container">
          <textarea
            className="question-input"
            placeholder="Type your question here..."
            value={userInput}
            onChange={handleInputChange}
          ></textarea>
          <button className="send-button" onClick={handleSendClick}>
            <FiSend className="send-icon" />
          </button>
        </div>
        <div className="flex-container">
          {selectedTechniques.map((techniqueName, index) => {
            const technique = techniquesData.find((t) => t.name === techniqueName);
            return (
              <div key={index} className="dynamic-box">
                <h4>{technique.name}</h4>
                <p>{technique.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Evaluation1;
