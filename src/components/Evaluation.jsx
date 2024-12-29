
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import Select from 'react-select';
import React, { useState, useEffect, useRef } from 'react';
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
        
        const data = {
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
      // const response = await fetch('http://localhost:3001/create_documents', {
      //   method: 'POST',
      //   body: requestBody, // Send FormData directly
      // });
   
      // if (!response.ok) {
      //   throw new Error(`Failed to upload files: ${response.statusText}`);
      // }
   
      const data = 
                {
                  "Response": {
                      "answer_relevancy": {
                          "0": 0.944727735443102,
                    "1":0.232333333
                      },
                      "context_recall": {
                          "0": 1.0,
                    "1":2.0
                      },
                      "factual_correctness": {
                          "0": 0.0,
                    "1":0.1
                      },
                      "faithfulness": {
                          "0": NaN,
                    "1":NaN
                      },
                      "llm_context_precision_with_reference": {
                          "0": 0.9999999999,
                    "1":21322222222
                      },
                      "reference": {
                          "0": "Property tax liability market value X assessment ratio exemptions X mill rate",
                    "1": " tax liability market value X assessment ratio exemptions X mill rate"
                      },
                      "response": {
                          "0": "\"Property tax liability = market value X assessment ratio - exemptions X mill rate\"",
                    "1": "\" liability = market value X assessment ratio - exemptions X mill rate\""
                      },
                      "retrieved_contexts": {
                          "0": [
                              "Property tax liability market value X assessment ratio exemptions X mill rate 10/28/2015 6/n/nThe Property Tax is a Good Source of Local Revenues Consistent with ability to pay and benefits received principles of taxation Scores well on criteria for a good revenue source from the National Conference of State Legislatures Revenue Stability Neutrality Simplicity Equity Accountability 10/28/2015 5/n/nThe Property Tax is a Good Source of Local Revenues Consistent with ability to pay and benefits received principles of taxation Scores well on criteria for a good revenue source from the National Conference of State Legislatures Revenue Stability Neutrality Simplicity Equity Accountability 10/28/2015 5/n/nDetermining Property Tax Liabilities Defining and Valuing the Property Tax Base Component Frequency of Valuation Determining Valuation Percent Real Property 5 year assessment cycle Local government 70 Personal Property Annually Self reported 70 Motor Vehicles Annually OPM from NADA data 70 10/28/2015 7"
                          ],
                    "1": [
                              "value X assessment ratio exemptions X mill rate 10/28/2015 6/n/nThe Property Tax is a Good Source of Local Revenues Consistent with ability to pay and benefits received principles of taxation Scores well on criteria for a good revenue source from the National Conference of State Legislatures Revenue Stability Neutrality Simplicity Equity Accountability 10/28/2015 5/n/nThe Property Tax is a Good Source of Local Revenues Consistent with ability to pay and benefits received principles of taxation Scores well on criteria for a good revenue source from the National Conference of State Legislatures Revenue Stability Neutrality Simplicity Equity Accountability 10/28/2015 5/n/nDetermining Property Tax Liabilities Defining and Valuing the Property Tax Base Component Frequency of Valuation Determining Valuation Percent Real Property 5 year assessment cycle Local government 70 Personal Property Annually Self reported 70 Motor Vehicles Annually OPM from NADA data 70 10/28/2015 7"
                          ]
                      },
                      "semantic_similarity": {
                          "0": 0.9459647666773591,
                    "1":0.22222222222222222
                      },
                      "techniques": {
                          "0": "HyDE_Search_Method",
                    "1":"Hybrid_Search_Method"
                      },
                      "user_input": {
                          "0": "what is the formula for the Property tax liability?",
                          "1":"Hierarchical_Search_Method"
                      }
                  },
                  "status": 200
                }

      setApiResponce(data)
      setMessage('Index created successfully!');
      
    } catch (error) {
      console.error('Error creating index:', error);
      setMessage(`Error creating index: ${error.message}`)
    }finally {
      //setIsLoading(false);
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

 const formatApiResponse = (apiResponse) => {
  if (!apiResponse || !apiResponse.Response) return [];

  const responseData = apiResponse.Response;

  // Create an array of objects representing each technique with the relevant data
  const formattedData = Object.keys(responseData.techniques).map((key) => {
    return {
      name: responseData.techniques[key],
      user_input: responseData.user_input[key],
      answer_relevancy: responseData.answer_relevancy[key],
      context_recall: responseData.context_recall[key],
      factual_correctness: responseData.factual_correctness[key],
      faithfulness: responseData.faithfulness[key] ?? "N/A", // Handle NaN
      llm_context_precision_with_reference: responseData.llm_context_precision_with_reference[key],
      reference: responseData.reference[key],
      response: responseData.response[key],
      retrieved_contexts: responseData.retrieved_contexts[key],
      semantic_similarity: responseData.semantic_similarity[key],
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
      {!isLoading && (<div className="flex-container">
         
              <div  className="dynamic-box">
              
        <div className="progress-bar-container">
         
          <div className="progress-bar"></div>
          
        </div>
        <p className="ml-100">Processing your request...</p>
        </div>
      
        </div>
      )}
      {isLoading && (<div className="flex-container">
        {selectedTechniques.map((techniqueName, index) => {
        const technique = formattedData.find((t) => t.name === techniqueName);
        return (
          <div key={index} className="dynamic-box">
            <h4 style={{marginTop:'-10px'}} className="text-blue-400">{technique?.name}</h4>
           <p ><strong>Reference:</strong> {technique?.reference}</p>
            <p className="mt-1"><strong>Response:</strong> {technique?.response}</p>
            <p className="mt-1"><strong>Retrieved Contexts:</strong> {technique?.retrieved_contexts?.join(', ')}</p>
            <p className="mt-1"><strong>Semantic Similarity:</strong> {technique?.semantic_similarity}</p>
            <p className="mt-1"><strong>User Input:</strong> {technique?.user_input}</p>
            <p className="mt-1"><strong>Answer Relevancy:</strong> {technique?.answer_relevancy}</p>
            <p className="mt-1"><strong>Context Recall:</strong> {technique?.context_recall}</p>
            <p className="mt-1"><strong>Factual Correctness:</strong> {technique?.factual_correctness}</p>
            <p className="mt-1"><strong>Faithfulness:</strong> {technique?.faithfulness ?? "N/A"}</p>
            <p className="mt-1"><strong>LLM Context Precision:</strong> {technique?.llm_context_precision_with_reference}</p>
            
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
