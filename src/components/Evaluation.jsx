
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import Select from 'react-select';
import React, { useState, useEffect, useRef } from 'react';
import abtimg from '../data/About_Us.png';
import docuimg from '../data/documentation.png';
import outlookimg from '../data/outlook_icon.jpg';
import rafimg from '../data/reference.png';
const Evaluation1 = () => {
  const techniquesData1 = [
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
  

  const [apiResponce, setApiResponce] = useState(null);
  
  const [techniquesData, setTechniquesData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userInput1, setUserInput1] = useState("");
  const { home, setHome, playgrond, setPlaygrond, vertorDB, setVectorDB } = useStateContext();
 
  const [message, setMessage] = useState(''); 
 
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Function to fetch data from the
    const fetchIndexes = async () => {
      try {
        // const response = await fetch('http://localhost:3001/getindexes', {
        //   method: 'GET'
        // });

        //const data = await response.json();
        const data ={
          "Response": [
              "Similarity_Search_Method",
              "HyDE_Search_Method",
              "Similarity_Score_Search_Method",
              "Hybrid_Search_Method"
          ],
          "status": 200
      }
        if (data && data.status === 200) {
          const formattedData = data.Response.map((item, index) => ({
            id: index + 1, // Generate an ID starting from 1
            name: item, // Use the name from the Response array
            description: `Description for Technique ${index + 1}`, // Add a default description
          }));
            console.log("kkkkkk",formattedData)
            setTechniquesData(formattedData);
            console.log("OOOOOOOO",techniquesData)
          
          }
          console.log("443434", data)
        } 
        catch (error) {
          console.error('Error creating index:', error);
        }
      };
      fetchIndexes();
    }, []);
    useEffect(() => {
      console.log("Updated techniquesData:", techniquesData);
      
    }, [techniquesData]); // Log when techniquesData changes
    const updatedData1 = techniquesData.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
    }));
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

  const handleSendClick = async () => {
    console.log("Message sent:", userInput);
    console.log("Message sent:", userInput1);
   
    if (selectedTechniques.length === 0) {
      alert('No techniques selected!');
      return;
    }
    setIsLoading(true);
    const requestBody = new FormData();
    requestBody.append("text", userInput);
    requestBody.append("ground_truth", userInput1);
    requestBody.append("search_option",  JSON.stringify(selectedTechniques)); // Send the first option
    for (const [key, value] of requestBody.entries()) {
      console.log(key, value);
    }
    try {
      const response = await fetch('http://localhost:3001/llm_inference', {
        method: 'POST',
        body: requestBody, // Send FormData directly
      });
      console.log("DDDDDDDDDDD",response)
      console.log('Response headers:', response.headers);  // Log the headers
 
      const contentType = response.headers.get('Content-Type');
      console.log('Content-Type:', contentType);
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        //setApiResponce(data)
        console.log('Response JSON:', data); // Log the parsed JSON response
      } else {
        const textResponse = await response.text();
        //setApiResponce(textResponse)
        console.log('Received non-JSON response:', textResponse);
      }
      
      if (!response.ok) {
        throw new Error(`Failed to upload files: ${response.statusText}`);
      }
     
      setMessage('Index created successfully!');
      
    } catch (error) {
      console.error('Error creating index:', error);
      setMessage(`Error creating index: ${error.message}`)
    }finally {
      setIsLoading(false);
    }
  };
 
  useEffect(() => {
  console.log("chandrabhan")
   
  }, [apiResponce]); 
 
   console.log(apiResponce);
   const apiResponseLength = apiResponce ? Object.keys(apiResponce).length : 0;
console.log(apiResponseLength);
  const [selectedTechniques, setSelectedTechniques] = useState([techniquesData1[0].name,techniquesData1[1].name]);

  
  console.log("techniques",techniquesData1[0].name)
 console.log("updated Data",updatedData1[0])
 console.log("selected Techniques",selectedTechniques)  

 const formatApiResponse = (apiResponce) => {
  if (!apiResponce || !apiResponce.Response) return [];

  const responseData = apiResponce.Response;

  // Create an array of objects representing each technique with the relevant data
  const formattedData = Object.keys(responseData.techniques).map((key) => {
    return {
      name: responseData.techniques[key] ?? "N/A",
      user_input: responseData.user_input[key] ?? "N/A",
      answer_relevancy: responseData.answer_relevancy[key] ?? "N/A", // without GT
      //context_recall: responseData.context_recall[key] ?? "N/A", // 3
      //factual_correctness: responseData.factual_correctness[key] ?? "N/A", // 2
      faithfulness: responseData.faithfulness[key] ?? "N/A", // Handle NaN // without GT
      //llm_context_precision_with_reference: responseData.llm_context_precision_with_reference[key] ?? "N/A", // without GT
      llm_context_precision_without_reference: responseData.llm_context_precision_without_reference[key] ?? "N/A", // without GT
      reference: responseData.reference[key] ?? "N/A",
      response: responseData.response[key]?? "N/A",
      retrieved_contexts: responseData.retrieved_contexts[key] ?? "N/A",
      //semantic_similarity: responseData.semantic_similarity[key] ?? "N/A", // 1
    };
  });

  return formattedData;
};
 // Assuming you've already set the `apiResponse` state from the API
  const formattedData = formatApiResponse(apiResponce);
  console.log(formattedData);
  
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
      
        <ul style={{marginTop:'30px'}}>
          {updatedData1.map((technique) => (
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
        <div className="mt-[90%] flex justify-center">
      <img
          style={{width:"40px",marginTop:'-8px'}}
          src={abtimg}
          alt="nttlogo"
        />
      <img
          style={{width:"40px",marginLeft:"20px",marginTop:'-8px'}}
          src={rafimg}
          alt="ragimg"
        />
          <img
          style={{width:"40px",marginLeft:"20px",marginTop:'-8px'}}
          src={outlookimg}
          alt="nttlogo"
        />
      <img
          style={{width:"40px",marginLeft:"20px",marginTop:'-8px'}}
          src={docuimg}
          alt="ragimg"
        />
   
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
        {(!message&&!isLoading) && (<div className="flex-container">
         
         <div  className="dynamic-box">
  
   </div>
   </div>
 )}
      {isLoading && (<div className="flex-container">
         
              <div  className="dynamic-box">
              
        <div className="progress-bar-container">
         
          <div className="progress-bar"></div>
          
        </div>
        <p className="ml-100">Processing your request...</p>
        </div>
      
        </div>
      )}
      {(message&&!isLoading) && (<div className="flex-container">
        {selectedTechniques.map((techniqueName, index) => {
        const technique = formattedData.find((t) => t.name === techniqueName);
        return (
          <div key={index} className="dynamic-box">
            <h4 style={{marginTop:'-10px'}} className="text-blue-400">{technique?.name}</h4>
          
            <p className="mt-1 text-lg"><strong className="text-lg">Response:</strong> {technique?.response}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Retrieved Contexts:</strong> {technique?.retrieved_contexts?.join(', ')}</p>
            <p className="mt-1 text-lg"><strong className="text-lg"> Reference:</strong> {technique?.reference}</p>
            <p className="mt-7"><strong className="text-xl mt-7">Matrix Evaluation:</strong></p>
            <div className="evaluation-matrix mt-1">
              
            <p className="mt-1 tect-lg"><strong className="text-lg">Answer Relevancy:</strong> {technique?.answer_relevancy}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Faithfulness:</strong> {technique?.faithfulness ?? "N/A"}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">LLM Context Precision Without Reference:</strong> {technique?.llm_context_precision_without_reference}</p>
            </div>
          </div>
        );
      })}
        </div>
      )}
      </div>
    </div>
  );
};

export default Evaluation1;
