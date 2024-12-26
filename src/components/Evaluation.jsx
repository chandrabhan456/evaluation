import React, { useState } from "react";
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
const Evaluation1 = () => {
  const techniquesData = [
    { id: 1, name: "Hybrid_Search_Method", description: "Description for Technique 1" },
    { id: 2, name: "HyDE_Search_Method", description: "Description for Technique 2" },
    { id: 3, name: "Hierarchical_Search_Method", description: "Description for Technique 3" },
    { id: 4, name: "SmallToBig_Parent_Child_Retriever", description: "Description for Technique 4" },
    { id: 5, name: "SmallToBig_Sentence_Window_Retriever", description: "Description for Technique 5" },
    { id: 6, name: "Similarity_Search_Method", description: "Description for Technique 6" },
    { id: 7, name: "Similarity_Score_Search_Method", description: "Description for Technique 7" },
    { id: 8, name: "Hybrid_Semantic_Search_With_Score", description: "Description for Technique 5" },
    { id: 9, name: "Hybrid_Search_With_Score", description: "Description for Technique 6" },
    { id: 10, name: "Vector_Search_With_Score", description: "Description for Technique 7" },
    { id: 11, name: "Vector_Search_With_Score", description: "Description for Technique 7" },
 
  ];

  const [selectedTechniques, setSelectedTechniques] = useState([techniquesData[0].name, techniquesData[1].name]);
  const [userInput, setUserInput] = useState("");
 const {home,setHome,playgrond,setPlaygrond,vertorDB,setVectorDB} = useStateContext();
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
          <div className="button-container">
            <NavLink
                              onClick={() =>  {setHome(true);setPlaygrond(false);setVectorDB(false) }}
                                          to='/home'
                                          key='Home'
                                         
                                         
                                        ><button className="home-button">Home</button></NavLink>
                      <NavLink
                              onClick={() =>  {setHome(false);setPlaygrond(false);setVectorDB(true) }}
                                          to='/vectorDB'
                                          key='vectorDB'
                                         
                                         
                                        ><button className="home-button ">Vector DB</button></NavLink>
                      <NavLink
                              onClick={() =>  {setHome(false);setPlaygrond(true);setVectorDB(false) }}
                                          to='/evaluation'
                                          key='evaluation'
                                         
                                         
                                        ><button className="home-button ">Playground</button></NavLink>
                      <button className="home-button ">Library</button>
        </div>
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
