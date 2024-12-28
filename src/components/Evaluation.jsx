
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import Select from 'react-select';
import React, { useState, useEffect, useRef } from 'react';
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
  const [userInput1, setUserInput1] = useState("");
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
  const handleInputChange1 = (event) => {
    setUserInput1(event.target.value);
  };

  const handleSendClick = () => {
    console.log("Message sent:", userInput);
    console.log("Message sent:", userInput1);
    setUserInput(""); // Clear input after sending
  };
 
  const optionsList = [
    { id: 1, value: 'option1', label: 'Option 1' },
    { id: 2, value: 'option2', label: 'Option 2' },
    { id: 3, value: 'option3', label: 'Option 3' },
    { id: 4, value: 'option4', label: 'Option 4' },
  ];

  const [selectedValues, setSelectedValues] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null)
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedValues((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
        <label htmlFor="dropdown" className="block text-lg ml-5 mt-2">Select Index</label>

<button
  onClick={toggleDropdown}
  className="dropdown-toggle"
  style={{
    width: '350px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f8f9fa',
    textAlign: 'left',
  }}
>
  {selectedValues.length > 0 ? `${selectedValues.length} selected` : 'Select Options'}
</button>
{isDropdownOpen && (
        <div
          className="dropdown-menu"
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '0px',
            backgroundColor: '#fff',
            position: 'absolute',
            width: '350px',
            marginLeft: '20px',
            zIndex: 10,
          }}
        >
           {optionsList.map((option) => (
            <div key={option.id} className="checkbox-item ml-1">
              <label>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedValues.includes(option.value)}
                  onChange={handleCheckboxChange}
                  style={{ marginRight: '8px' }}
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
        <ul style={{marginTop:'4px'}}>
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
        
          <textarea
            className="question-input1 ml-0.5"
            placeholder="GroundTruth/Optional"
            value={userInput1}
            onChange={handleInputChange1}
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
