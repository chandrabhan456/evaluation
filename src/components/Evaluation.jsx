
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
  const [techname, setTechName] = useState(false)
  let formattedData
  const [isExisting, setIsExisting] = useState(true);
   const toggleState = () => {
     setIsExisting(!isExisting);
   };
  useEffect(() => {
    // Function to fetch data from the
    const fetchIndexes = async () => {
      try {
       // const response = await fetch('http://localhost:3001/getindexes', {
        //  method: 'GET'
        // });

       // const data = await response.json();
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
         
          return prev.filter((item) => item !== techniqueName); // Remove if already selected
        } else {
         
          return [...prev, techniqueName]; // Add technique
        }
      });
    };
    
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    setTechName(false)
  };
  const handleInputChange1 = (event) => {
    setUserInput1(event.target.value);
    setTechName(false)
  };

  const handleSendClick = async () => {
    console.log("Message sent:", userInput);
    console.log("Message sent:", userInput1);
   
    if (selectedTechniques.length === 0) {
      alert('No techniques selected!');
      return;
    }
    setIsLoading(true);
    setTechName(true)
    console.log("pagal",techname)
    const requestBody = new FormData();
    requestBody.append("text", userInput);
    requestBody.append("ground_truth", userInput1);
    requestBody.append("search_option",  JSON.stringify(selectedTechniques)); // Send the first option
    for (const [key, value] of requestBody.entries()) {
      console.log(key, value);
    }
    try {
     // const response = await fetch('http://localhost:3001/llm_inference', {
       // method: 'POST',
       // body: requestBody, 
     // });
      //console.log("DDDDDDDDDDD",response)
      //console.log('Response headers:', response.headers); 
 
     // const contentType = response.headers.get('Content-Type');
     // console.log('Content-Type:', contentType);
      // if (contentType && contentType.includes('application/json')) {
      //   const data = await response.json();
      //   setApiResponce(data)
      //   console.log('Response JSON:', data); 
      // } else {
      //   const textResponse = await response.text();
      //   setApiResponce(textResponse)
      //   console.log('Received non-JSON response:', textResponse);
      // }
      
      // if (!response.ok) {
      //   throw new Error(`Failed to upload files: ${response.statusText}`);
      // }
      if (userInput1===''){
     const data ={
      "Response": {
          "Answer_Latency": {
              "0": "1.61 secs"
          },
          "Context_Latency": {
              "0": "1.65 secs"
          },
          "Evaluation_Latency": "68.8 secs",
          "answer_relevancy": {
              "0": 0.7445717029520963
          },
          "faithfulness": {
              "0": "NaN"
          },
          "llm_context_precision_without_reference": {
              "0": 0.9999999999
          },
          "reference": {
              "0": ""
          },
          "response": {
              "0": "$70,000, $150,000, $300,000"
          },
          "retrieved_contexts": {
              "0": [
                  "10/28/2015 18 Table 21 Property Use Classes and True Market Values Used for Minnesota Analysis RURAL Land Use Classes Rural Rank Homestead $70,000 70,000 Litchfield 10 $150,000 150,000 Litchfield 12 $300,000 300,000 Litchfield 12 Apartments Litchfield 24 Commercial $100,000 20,000 $120,000 Litchfield 25 $1,000,000 200,000 $1,200,000 Litchfield 25 $25,000,000 5,000,000 $30,000,000 Litchfield 26 Industrial $100,000 50,000 40,000 10,000 $200,000 Litchfield 32 (50 personal $1,000,000 500,000 400,000 100,000 $2,000,000 Litchfield 34 $25,000,000 12,500,000 10,000,000 2,500,000 $50,000,000 Litchfield 35 Industrial $100,000 75,000 60,000 15,000 $250,000 Litchfield 36 (60 personal $1,000,000 750,000 600,000 150,000 $2,500,000 Litchfield 40 $25,000,000 18,750,000 15,000,000 3,750,000 $62,500,000 Litchfield 40 Out of 53 since the analysis includes Washington DC and two cities for Illinois and New York Source Minnesota Center for Fiscal Excellence various tables/n/n10/28/2015 18 Table 21 Property Use Classes and True Market Values Used for Minnesota Analysis RURAL Land Use Classes Rural Rank Homestead $70,000 70,000 Litchfield 10 $150,000 150,000 Litchfield 12 $300,000 300,000 Litchfield 12 Apartments Litchfield 24 Commercial $100,000 20,000 $120,000 Litchfield 25 $1,000,000 200,000 $1,200,000 Litchfield 25 $25,000,000 5,000,000 $30,000,000 Litchfield 26 Industrial $100,000 50,000 40,000 10,000 $200,000 Litchfield 32 (50 personal $1,000,000 500,000 400,000 100,000 $2,000,000 Litchfield 34 $25,000,000 12,500,000 10,000,000 2,500,000 $50,000,000 Litchfield 35 Industrial $100,000 75,000 60,000 15,000 $250,000 Litchfield 36 (60 personal $1,000,000 750,000 600,000 150,000 $2,500,000 Litchfield 40 $25,000,000 18,750,000 15,000,000 3,750,000 $62,500,000 Litchfield 40 Out of 53 since the analysis includes Washington DC and two cities for Illinois and New York Source Minnesota Center for Fiscal Excellence various tables/n/n10/28/2015 18 Table 21 Property Use Classes and True Market Values Used for Minnesota Analysis RURAL Land Use Classes Rural Rank Homestead $70,000 70,000 Litchfield 10 $150,000 150,000 Litchfield 12 $300,000 300,000 Litchfield 12 Apartments Litchfield 24 Commercial $100,000 20,000 $120,000 Litchfield 25 $1,000,000 200,000 $1,200,000 Litchfield 25 $25,000,000 5,000,000 $30,000,000 Litchfield 26 Industrial $100,000 50,000 40,000 10,000 $200,000 Litchfield 32 (50 personal $1,000,000 500,000 400,000 100,000 $2,000,000 Litchfield 34 $25,000,000 12,500,000 10,000,000 2,500,000 $50,000,000 Litchfield 35 Industrial $100,000 75,000 60,000 15,000 $250,000 Litchfield 36 (60 personal $1,000,000 750,000 600,000 150,000 $2,500,000 Litchfield 40 $25,000,000 18,750,000 15,000,000 3,750,000 $62,500,000 Litchfield 40 Out of 53 since the analysis includes Washington DC and two cities for Illinois and New York Source Minnesota Center for Fiscal Excellence various tables"
              ]
          },
          "techniques": {
              "0": "Hybrid_Search_Method"
          },
          "user_input": {
              "0": "What is the homestead value for real property used for Minnesota Analysis?"
          }
      },
      "status": 200
    }

    setApiResponce(data)}
    else{
      const data={

        "Response": {
    
            "Answer_Latency": {
    
                "0": "1.67 secs"
    
            },
    
            "Context_Latency": {
    
                "0": "11.23 secs"
    
            },
    
            "Evaluation_Latency": "184.39 secs",
    
            "answer_relevancy": {
    
                "0": 0.944727735443102
    
            },
    
            "context_recall": {
    
                "0": 0.0
    
            },
    
            "factual_correctness": {
    
                "0": 0.0
    
            },
    
            "faithfulness": {
    
                "0": "NaN"
    
            },
    
            "llm_context_precision_with_reference": {
    
                "0": 0.9999999999
    
            },
    
            "reference": {
    
                "0": "Property Tax Liability = (Assessed Value of Property) x (Valuation Percent) x (Tax Rate).\r\n "
    
            },
    
            "response": {
    
                "0": "\"Property tax liability = (Market Value * Assessment Ratio - Exemptions) * Mill Rate\""
    
            },
    
            "retrieved_contexts": {
    
                "0": [
    
                    "Property tax liability market value X assessment ratio exemptions X mill rate 10/28/2015 6/n/n45 them after first applying the sales ratio to tr ue market value since the exemption will not incorporate any of the assessment error to which properties may be subject Note in some cases the exemption is subtracted from taxable value instead of assessed value In those cases we apply the exemption after applying the classification rate Component 4 Classification Rates CR The fourth component of the property tax calculation involves subjecting the parcel s taxable value to classification or assessment rates which convert assessed value to taxable value In many cases these classification rates are 100 meaning that taxable value is equal to assessed value However governments often use differential rates to affect the distribution of property tax levies to provide tax relief for a selected class of classes of properties at the expense of others In most states state legislatures set the classification schemes In a few states local governments have some autonomy over classification rates Because of the wide variation in the quality of assessments across the states particularly across classes of property many states have no classification scheme in statute and may in fact have significant classification via uneven assessments across classes of property In some cases this may violate state constitutional provisions on uniform assessments Some states like Minnesota enforce strict standards of assessment quality sales ratio studies state orders adjusting values state certification of assessors etc and put their classification policy in statute Component 5 Total Local Tax Rate TR The study defines payable 2020 tax rate as the rate used to calculate the property taxes with a lien date in 2020 regardless of the date s on which payments are due In some cities there are multiple combinations of taxing jurisdictions namely the state cities counties school districts and special taxing districts For instance a city may be located in multiple school districts and therefore rates will differ based on which school district a parcel is located in This study uses the rate that is most prevalent in a city This study excludes special assessments since they are more in the nature of user charges do not affect a majority of parcels and are usually not sources of general revenue Component 6 Credits C The final step in the tax calculation is to recognize any general deductions from the gross property tax calculations credits The study includes any credits that apply to a majority of parcels of the specified type Certain states provide credits based on early payment the study assumes that taxpayers take advantage of the credit by making the early payment Effective Tax Rates ETRs Effective tax rates are used to express the relatio nship between net property taxes and the true market value of a property This contrasts with the millage rates or other rates that are applied to/n/nDetermining Property Tax Liabilities Defining and Valuing the Property Tax Base Component Frequency of Valuation Determining Valuation Percent Real Property 5 year assessment cycle Local government 70 Personal Property Annually Self reported 70 Motor Vehicles Annually OPM from NADA data 70 10/28/2015 7"
    
                ]
    
            },
    
            "semantic_similarity": {
    
                "0": 0.9153371372922177
    
            },
    
            "techniques": {
    
                "0": "HyDE_Search_Method"
    
            },
    
            "user_input": {
    
                "0": "what is the formula for the Property tax liability?"
    
            }
    
        },
    
        "status": 200
    
    }
    setApiResponce(data)
    }
      console.log('TechName:', techname);
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
  useEffect(() => {
    
    
    }, [techname]);
    useEffect(() => {
    
      
      }, [message]);
   console.log("techname1",techname)
   console.log("message1",message);
   const apiResponseLength = apiResponce ? Object.keys(apiResponce).length : 0;
console.log(apiResponseLength);
  const [selectedTechniques, setSelectedTechniques] = useState([techniquesData1[0].name,techniquesData1[1].name]);

  
  console.log("techniques",techniquesData1[0].name)
 console.log("updated Data",updatedData1[0])
 console.log("selected Techniques",apiResponce)  

 const formatApiResponse = (apiResponce) => {
  if (!apiResponce || !apiResponce.Response) return [];

  const responseData = apiResponce.Response;
  console.log("OOOOOOO", responseData.Evaluation_Latency)

  // Create an array of objects representing each technique with the relevant data
  const formattedData = Object.keys(responseData.techniques).map((key) => {
    return {
      name: responseData.techniques[key] ?? "N/A",
      user_input: responseData.user_input[key] ?? "N/A",
      answer_relevancy: responseData.answer_relevancy[key] ?? "N/A", // without GT
      answer_latency: responseData.Answer_Latency[key] ?? "N/A", // 3
      context_latency: responseData.Context_Latency[key] ?? "N/A", // 2
      faithfulness: responseData.faithfulness[key] ?? "N/A", // Handle NaN // without GT
      llm_context_precision_without_reference: responseData.llm_context_precision_without_reference[key] ?? "N/A", // without GT
      reference: responseData.reference[key] ?? "N/A",
      response: responseData.response[key]?? "N/A",
      retrieved_contexts: responseData.retrieved_contexts[key] ?? "N/A",
    };
  });

  return formattedData;
};
 // Assuming you've already set the `apiResponse` state from the API
 const formatApiResponseNOGT = (apiResponce) => {
  if (!apiResponce || !apiResponce.Response) return [];

  const responseData = apiResponce.Response;
  console.log("OOOOOOO", responseData.Evaluation_Latency)

  // Create an array of objects representing each technique with the relevant data
  const formattedData = Object.keys(responseData.techniques).map((key) => {
    return {
      name: responseData.techniques[key] ?? "N/A",
      user_input: responseData.user_input[key] ?? "N/A",
      answer_relevancy: responseData.answer_relevancy[key] ?? "N/A", // without GT
      answer_latency: responseData.Answer_Latency[key] ?? "N/A", // 3
      context_latency: responseData.Context_Latency[key] ?? "N/A", // 2
      faithfulness: responseData.faithfulness[key] ?? "N/A", // Handle NaN // without GT
      llm_context_precision_with_reference: responseData.llm_context_precision_with_reference[key] ?? "N/A", // without GT
      reference: responseData.reference[key] ?? "N/A",
      response: responseData.response[key]?? "N/A",
      retrieved_contexts: responseData.retrieved_contexts[key] ?? "N/A",
      semantic_similarity: responseData.semantic_similarity[key] ?? "N/A", // 1
      context_recall: responseData.context_recall[key] ?? "N/A",
      factual_correctness: responseData.factual_correctness[key] ?? "N/A", // 1
    };
  });

  return formattedData;
};
console.log("TechName2",techname)
console.log("message",message)
if (!message ) {
  console.log("1")
  formattedData = [];
  console.log("message",message)
}
else if(!techname){
  console.log("2")
  formattedData = [];
  console.log("message",message)
  setMessage('')
}
 else if (message&&techname&&userInput1 === "") {
  
  console.log("3")
  console.log("formattedData", formattedData);
  formattedData = formatApiResponse(apiResponce);
 

} else if (message&&techname){
  console.log("4")
  
  formattedData = formatApiResponseNOGT(apiResponce);
  
}

 var myBoolean = true; // I'm a boolean
if(selectedTechniques.length===0){
  myBoolean = false
 
}
console.log("Boolean",myBoolean)
 console.log("GroundTruth",formattedData.length);
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
                      <button className="home-button ">EvalFrame</button>
        </div>
        <div className="toggle-container justify-end mt-2">
      {/* Label for "Create" */}
      <span className="toggle-label ">RAGA</span>

      {/* Toggle switch */}
      <div
        className={`toggle-switch ${isExisting ? "" : "active"}`}
        onClick={toggleState}
      >
        <div className="toggle-knob"></div>
      </div>
       {/* Label for "Existing" */}
       <span className="toggle-label">DeepEval</span>
    </div>
        <ul style={{marginTop:'0px'}}>
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
       {/* <div className="sidenavimg flex justify-center" >
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
   
      </div>*/}
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
   {(!myBoolean||!techname
   ) && (<div className="flex-container">
         
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
{(message && !isLoading && !userInput1 && techname) && (
  <div className="flex-container1">
    {selectedTechniques.map((techniqueName, index) => {
      const technique = formattedData.find((t) => t.name === techniqueName);
      
      // Render only if the technique name matches the desired value
      {console.log("ramusomu",technique?.name)}
      if (technique?.name === undefined) {
        return null; // Skip rendering if the name doesn't match
      }
      
      return (
        <div key={index} className="dynamic-box">
          <h4 style={{ marginTop: '-10px' }} className="text-blue-400">{technique?.name}</h4>
          
          <p className="mt-1 text-lg">
            <strong className="text-lg">Response:</strong> {technique?.response}
          </p>
          <p className="mt-1 text-lg">
            <strong className="text-lg">Retrieved Contexts:</strong> {technique?.retrieved_contexts?.join(', ')}
          </p>
          <p className="mt-1 text-lg">
            <strong className="text-lg">Ground Truth:</strong> {technique?.reference}
          </p>
          <p className="mt-7">
            <strong className="text-xl mt-7">LLM Evaluation Metrics:</strong>
          </p>
          <div className="evaluation-matrix mt-1">
            <p className="mt-1 tect-lg">
              <strong className="text-lg">Answer Relevancy:</strong> {technique?.answer_relevancy}
            </p>
            <p className="mt-1 text-lg">
              <strong className="text-lg">Faithfulness:</strong> {technique?.faithfulness ?? "N/A"}
            </p>
            <p className="mt-1 tect-lg">
              <strong className="text-lg">Answer Latency:</strong> {technique?.answer_latency}
            </p>
            <p className="mt-1 text-lg">
              <strong className="text-lg">Context Latency:</strong> {technique?.context_latency ?? "N/A"}
            </p>
            <p className="mt-1 text-lg">
              <strong className="text-lg">LLM Context Precision Without Reference:</strong> {technique?.llm_context_precision_without_reference}
            </p>
          </div>
        </div>
      );
    })}
  </div>
)}

           {(message&&!isLoading&&userInput1) && (<div className="flex-container1">
        {selectedTechniques.map((techniqueName, index) => {
        const technique = formattedData.find((t) => t.name === techniqueName);
        {console.log("ramusomu",technique?.name)}
        if (technique?.name === undefined) {
          return null; // Skip rendering if the name doesn't match
        }
        return (
          <div key={index} className="dynamic-box">
            <h4 style={{marginTop:'-10px'}} className="text-blue-400">{technique?.name}</h4>
          
            <p className="mt-1 text-lg"><strong className="text-lg">Response:</strong> {technique?.response}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Retrieved Contexts:</strong> {technique?.retrieved_contexts?.join(', ')}</p>
            <p className="mt-1 text-lg"><strong className="text-lg"> Ground Truth:</strong> {technique?.reference}</p>
            <p className="mt-7"><strong className="text-xl mt-7">LLM Evaluation Metrics:</strong></p>
            <div className="evaluation-matrix mt-1">
              
            <p className="mt-1 tect-lg"><strong className="text-lg">Answer Relevancy:</strong> {technique?.answer_relevancy}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Faithfulness:</strong> {technique?.faithfulness ?? "N/A"}</p>
            <p className="mt-1 tect-lg"><strong className="text-lg">Answer Latency:</strong> {technique?.answer_latency}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Context Latency:</strong> {technique?.context_latency ?? "N/A"}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">LLM Context Precision With Reference:</strong> {technique?.llm_context_precision_with_reference}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Context Recall:</strong> {technique?.context_recall ?? "N/A"}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Factual Correctness:</strong> {technique?.factual_correctness}</p>
            <p className="mt-1 text-lg"><strong className="text-lg">Semantic Similarity:</strong> {technique?.semantic_similarity}</p>
         
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
