
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import Select from 'react-select';
import React, { useState, useEffect, useRef } from 'react';
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaFileWord } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
// import abtimg from '../data/pdfimage.png';
// import docuimg from '../data/excelimage.jpg';
// import outlookimg from '../data/htmlimage.png';
// import rafimg from '../data/docximage.png';
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
  const { home, setHome, playgrond, setPlaygrond, vertorDB, setVectorDB,currentMode, setCurrentMode, } = useStateContext();
 
  const [message, setMessage] = useState(''); 
  const [groundTruth,setGroundTruth] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [techname, setTechName] = useState(false)
  let formattedData
  const [isExisting, setIsExisting] = useState(true);
  const [deepeval, setdeepeval] = useState("RAGAS");
  const[errormsg,setErrormsg]=useState("") 
  const [methods,setMethods] = useState(false)
  const toggleReference = () => {
   
    setGroundTruth(!groundTruth);
  };
   const toggleState = () => {
     if (!isExisting){
      setdeepeval("RAGAS")
      setTechName(false)
     }
     else{
      setdeepeval("DeepEval")
      setTechName(false)
     }
     setIsExisting(!isExisting);
   };
  useEffect(() => {
    // Function to fetch data from the
    setMethods(true)
    const fetchIndexes = async () => {
      try {
       //const response = await fetch('http://localhost:3001/getindexes', {
        // method: 'GET'
        //});

       //const data = await response.json();
      const data ={
        "Response": [
            "Similarity_Search_Method",
            "HyDE_Search_Method",
            "Similarity_Score_Search_Method",
            "Hybrid_Search_Method",
            "Vector_Search_Method",
            "MMRS_With_Score_Method"
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
        finally {
          setMethods(false);
        }
      };
      fetchIndexes();
    }, []);
    useEffect(() => {
   
     
    }, [deepeval]);

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
    requestBody.append("evalframe", deepeval);
    for (const [key, value] of requestBody.entries()) {
      console.log(key, value);
    }
    try {
    // const response = await fetch('http://localhost:3001/llm_inference', {
      // method: 'POST',
      /// body: requestBody, 
    // });
    //const response = {
  
 // }
 const response ={

     "Response": {
      "Answer_Latency": {
        "0": "1.52 secs",
        "1": "1.37 secs"
    },
    "Context_Latency": {
        "0": "1.61 secs",
        "1": "5.16 secs"
    },
    "Evaluation_Latency": "133.71 secs",
    "answer_relevancy": {
        "0": 0.9965134210165661,
        "1": 0.944727735443102
    },
    "faithfulness": {
        "0": 0.0,
        "1": "0"
    },
    "llm_context_precision_without_reference": {
        "0": 0.0,
        "1": 0.9999999999
    },
    "reference": {
        "0": "",
        "1": ""
    },
    "response": {
        "0": "\"The formula for the Property tax liability is: Property Tax Liability = (Assessed Value of Property) * (Tax Rate).\"",
        "1": "\"Property tax liability = market value X assessment ratio X exemptions X mill rate\""
    },
    "retrieved_contexts": {
        "0": [
            "Determining Property Tax Liabilities Defining and Valuing the Property Tax Base Component Frequency of Valuation Determining Valuation Percent Real Property 5 year assessment cycle Local government 70 Personal Property Annually Self reported 70 Motor Vehicles Annually OPM from NADA data 70 10/28/2015 7/n/nDetermining Property Tax Liabilities Defining and Valuing the Property Tax Base Component Frequency of Valuation Determining Valuation Percent Real Property 5 year assessment cycle Local government 70 Personal Property Annually Self reported 70 Motor Vehicles Annually OPM from NADA data 70 10/28/2015 7/n/nDetermining Property Tax Liabilities Defining and Valuing the Property Tax Base Component Frequency of Valuation Determining Valuation Percent Real Property 5 year assessment cycle Local government 70 Personal Property Annually Self reported 70 Motor Vehicles Annually OPM from NADA data 70 10/28/2015 7"
        ],
        "1": [
            "Property tax liability market value X assessment ratio exemptions X mill rate 10/28/2015 6/n/nProperty tax liability market value X assessment ratio exemptions X mill rate 10/28/2015 6/n/nProperty tax liability market value X assessment ratio exemptions X mill rate 10/28/2015 6"
        ]
    },
    "techniques": {
        "0": "Hybrid_Search_Method",
        "1": "HyDE_Search_Method"
    },
    "user_input": {
        "0": "what is the formula for the Property tax liability?",
        "1": "what is the formula for the Property tax liability?"
    }
 },
   "status": 200
    }
     
      console.log("DDDDDDDDDDD",response)
      console.log('Response headers:', response.status); 
 
    
        //const data = await response.json();
        setApiResponce(response)
        console.log('Response JSON:', response);
        setMessage('Index created successfully!');
   
      
      if ((response.status!=200 || !response)) {
       
        setErrormsg("Your Request Failed Please try again!")
        setTechName(false)
      }
      
      console.log('TechName:', techname);
      
    } catch (error) {
      console.error('Error creating index:', error);
      // setMessage(`Error creating index: ${error.message}`)
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
  const [selectedTechniques, setSelectedTechniques] = useState([]);

  
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
const formatApiResponseDeepeval = (apiResponce) => {
  console.log("apiresponse",apiResponce)
  if (!apiResponce || !apiResponce.Response) return [];

  const responseData = apiResponce.Response;
  console.log("OOOOOOO", responseData.Evaluation_Latency)

  // Create an array of objects representing each technique with the relevant data
  const formattedData = Object.keys(responseData.techniques).map((key) => {
    return {
      name: responseData.techniques[key] ?? "N/A",
      user_input: responseData.user_input[key] ?? "N/A",
      answer_relevancy_metric: responseData.AnswerRelevancyMetric[key] ?? "N/A", // without GT
      answer_latency: responseData.Answer_Latency[key] ?? "N/A", // 3
      context_latency: responseData.Context_Latency[key] ?? "N/A", // 2
      faithfulness_metric: responseData.FaithfulnessMetric[key] ?? "N/A", // Handle NaN // without GT
      ContextualRelevancyMetric: responseData.ContextualRelevancyMetric[key] ?? "N/A", // without GT
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
const formatApiResponseNOGTDeepeval = (apiResponce) => {
  if (!apiResponce || !apiResponce.Response) return [];

  const responseData = apiResponce.Response;
  console.log("OOOOOOO", responseData.Evaluation_Latency)

  // Create an array of objects representing each technique with the relevant data
  const formattedData = Object.keys(responseData.techniques).map((key) => {
    return {
      name: responseData.techniques[key] ?? "N/A",
      user_input: responseData.user_input[key] ?? "N/A",
      answer_relevancy: responseData.AnswerRelevancyMetric[key] ?? "N/A", // without GT
      answer_latency: responseData.Answer_Latency[key] ?? "N/A", // 3
      context_latency: responseData.Context_Latency[key] ?? "N/A", // 2
      faithfulness: responseData.FaithfulnessMetric[key] ?? "N/A", // Handle NaN // without GT
      ContextualRelevancyMetric: responseData.ContextualRelevancyMetric[key] ?? "N/A", // without GT
      reference: responseData.reference[key] ?? "N/A",
      response: responseData.response[key]?? "N/A",
      retrieved_contexts: responseData.retrieved_contexts[key] ?? "N/A",
      ContextualPrecisionMetric: responseData.ContextualPrecisionMetric[key] ?? "N/A", // 1
      ContextualRecallMetric: responseData.ContextualRecallMetric[key] ?? "N/A"
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
 
  if (deepeval === "RAGAS"){
    formattedData = formatApiResponse(apiResponce);


  }
  else{
    formattedData = formatApiResponseDeepeval(apiResponce);
  }
 

} else if (message&&techname){
  console.log("4")
  if (deepeval === "RAGAS"){
    formattedData = formatApiResponseNOGT(apiResponce);
  }
  else{
    formattedData = formatApiResponseNOGTDeepeval(apiResponce);
  }
  
}

 var myBoolean = true; // I'm a boolean
if(selectedTechniques.length===0){
  myBoolean = false
 
}const boxRefs = useRef([]); // Store refs for each box
const [maxHeight, setMaxHeight] = useState("auto");

useEffect(() => {
  if (boxRefs.current.length > 0) {
    const heights = boxRefs.current.map(ref => ref?.scrollHeight || 0);
    setMaxHeight(`${Math.max(...heights)}px`);
  }
}, [selectedTechniques, formattedData]); // Runs when data changes


console.log("max height",maxHeight)
console.log("Boolean",myBoolean)
 console.log("GroundTruth",formattedData.length);
 return (
  <div className={`app-container ${currentMode === 'Dark' ? 'dark' : ''}`} >
   

    <div className="sidebar dark:bg-[#1e1e1e] bg-[#f7f8fa]  border-t-0 border-gray-300 dark:border-[#4f4f4f]">
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
      <div className="toggle-container justify-center mt-2 dark:bg-[#1e1e1e] bg-[#f7f8fa] ">
      {/* Label for "Create" */}
      <span className="toggle-label  dark:bg-[#1e1e1e] bg-[#f7f8fa]  dark:text-white text-black ">RAGAS</span>
 
      {/* Toggle switch */}
      <div
        className={`toggle-switch ${isExisting ? "" : "active"}`}
        onClick={toggleState}
      >
        <div className="toggle-knob"></div>
      </div>
       {/* Label for "Existing" */}
       <span className="toggle-label  dark:bg-[#1e1e1e] bg-[#f7f8fa]  dark:text-white text-black">DeepEval</span>
    </div>   
    {methods && (
      <div class="loading-container mt-10">
  <span class="dot"></span>
  <span class="dot ml-2"></span>
  <span class="dot ml-2"></span>
</div>
      )}
     {!methods && <ul style={{marginTop:'3px'}}>
        {updatedData1.map((technique) => (
          <li key={technique.id} >
            <label    className="truncate dark:text-[#D3D3D3] text-[#555]">
              <input
                type="checkbox"
                checked={selectedTechniques.includes(technique.name)}
                onChange={() => toggleTechnique(technique.name)}
              />
              {technique.name}
            </label>
          </li>
        ))}
      </ul>}
      </div>
      <div className="sidenavimg flex justify-center">
             <FaRegFilePdf
                     style={{
                       color: "#FF0000",
                       marginTop: "2px",
                     
                     }}
                     className="text-5xl"
                   />
                   <RiFileExcel2Fill
                     style={{
                       color: "green",
                       marginTop: "2px",
                      
                     }}
                     className="text-5xl"
                   />
           <BsFiletypeHtml
                     style={{
                       color: "#1E90FF",
                       marginTop: "2px",
                      
                     }}
                     className="text-5xl"
                   />
         
         <FaFileWord
                     style={{
                       color: "#0072C6",
                       marginTop: "2px",
                      
                     }}
                     className="text-5xl"
                   />
           </div> 
    </div>

    <div className="content dark:bg-black bg-[#ffffff]">
    <div className="toggle-container dark:bg-black bg-[#ffffff]" >
      {/* Label for "Create" */}
     
 
      {/* Toggle switch */}
      <div
        className={`toggle-switch ${!groundTruth ? "" : "active"}`}
        onClick={toggleReference}
      >
        <div className="toggle-knob"></div>
      </div>
       {/* Label for "Existing" */}
       <span className="toggle-label dark:bg-black bg-[#ffffff] dark:text-white text-black">Add Reference</span>
    </div>  
    {!groundTruth &&
    <div className="input-container ">
    <textarea
      className="question-input0 dark:bg-[#1e1e1e] bg-[#f7f7f7]  border border-gray-300 dark:border-[#4f4f4f]  dark:text-white text-black"
      placeholder="Type your question here..."
      value={userInput}
      onChange={handleInputChange}
    ></textarea>
 
    <button className="send-button" onClick={handleSendClick}>
      <FiSend className="send-icon" />
    </button>
  </div>}
      {groundTruth && 
      <div className="input-container ">
        <textarea
          className="question-input dark:bg-[#1e1e1e] bg-[#f7f7f7]  border border-gray-300 dark:border-[#4f4f4f]  dark:text-white text-black"
          placeholder="Type your question here..."
          value={userInput}
          onChange={handleInputChange}
        ></textarea>
     
        <textarea
          className="question-input1 ml-0.5  dark:text-white text-black dark:bg-[#1e1e1e] bg-[#f7f7f7]  border border-gray-300 dark:border-[#4f4f4f]"
          placeholder="GroundTruth/Optional"
          value={userInput1}
          onChange={handleInputChange1}
        ></textarea>
        <button className="send-button" onClick={handleSendClick}>
          <FiSend className="send-icon" />
        </button>
      </div>}
 
 {((!myBoolean||!techname||(!message&&!isLoading))
 ) && (<div className="flex-container">
       
       <div  className="dynamic-box1 dark:bg-[#1e1e1e] bg-[#f7f7f7]  border border-gray-300 dark:border-[#4f4f4f]">
     {errormsg && <div className="ml-[34%]"><p className="message-box1 ">{errormsg}</p></div>}
 </div>
 </div>
)}
    {isLoading && (<div className="flex-container">
       
            <div  className="dynamic-box1 dark:bg-[#1e1e1e] bg-[#f7f7f7]  border border-gray-300 dark:border-[#4f4f4f]">
           
      <div className="progress-bar-container">
       
        <div className="progress-bar"></div>
       
      </div>
      <p className="ml-100">Processing your request...</p>
      </div>
   
      </div>
    )}
{(message && !isLoading && !userInput1 && techname && isExisting) && (
<div className="flex-container1">
  {selectedTechniques.map((techniqueName, index) => {
    const technique = formattedData.find((t) => t.name === techniqueName);
   
    // Render only if the technique name matches the desired value
    {console.log("ramusomu",technique?.name)}
    if (technique?.name === undefined) {
      return null; // Skip rendering if the name doesn't match
    }
   
    return (
      //<div key={index}   ref={(el) => (boxRefs.current[index] = el)} 
      //className="dynamic-box" style={{ minHeight: maxHeight }}>
      <div key={index}   ref={(el) => (boxRefs.current[index] = el)} 
       className="dynamic-box max-h-[800px] overflow-y-auto dark:bg-[#1e1e1e] bg-[#f7f7f7] dark:text-[#d3d3d3] text-[#555] border border-gray-300 dark:border-[#4f4f4f]">
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
        <div className="evaluation-matrix mt-1 dark:bg-[#2d3a30] bg-[#ddf2d1]">
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
{(message && !isLoading && !userInput1 && techname && !isExisting) && (
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
       
        <p className=" text-lg">
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
            <strong className="text-lg">Answer Relevancy:</strong> {technique?.answer_relevancy_metric}
          </p>
          <p className="mt-1 text-lg">
            <strong className="text-lg">Faithfulness:</strong> {technique?.faithfulness_metric ?? "N/A"}
          </p>
          <p className="mt-1 tect-lg">
            <strong className="text-lg">Answer Latency:</strong> {technique?.answer_latency}
          </p>
          <p className="mt-1 text-lg">
            <strong className="text-lg">Context Latency:</strong> {technique?.context_latency ?? "N/A"}
          </p>
          <p className="mt-1 text-lg">
            <strong className="text-lg">LLM Context Relevancy Metric:</strong> {technique?.ContextualRelevancyMetric}
          </p>
        </div>
      </div>
    );
  })}
</div>
)}

         {(message&&!isLoading&&userInput1&&isExisting) && (<div className="flex-container1">
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
    {(message&&!isLoading&&userInput1&&!isExisting) && (<div className="flex-container1">
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
           
          <p className="mt-1 tect-lg"><strong className="text-lg">Answer Relevancy:</strong> {technique?.AnswerRelevancyMetric}</p>
          <p className="mt-1 text-lg"><strong className="text-lg">Faithfulness:</strong> {technique?.FaithfulnessMetric ?? "N/A"}</p>
          <p className="mt-1 tect-lg"><strong className="text-lg">Answer Latency:</strong> {technique?.answer_latency}</p>
          <p className="mt-1 text-lg"><strong className="text-lg">Context Latency:</strong> {technique?.context_latency ?? "N/A"}</p>
          <p className="mt-1 text-lg"><strong className="text-lg">LLM Context Relevancy Metric:</strong> {technique?.ContextualRelevancyMetric}</p>
          <p className="mt-1 text-lg"><strong className="text-lg">Context Recall:</strong> {technique?.ContextualRecallMetric ?? "N/A"}</p>
          <p className="mt-1 text-lg"><strong className="text-lg">Contextual Precision Metric:</strong> {technique?.ContextualPrecisionMetric}</p>
       
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
