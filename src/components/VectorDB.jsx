import React, { useState, useEffect } from "react";

import { pdfjs } from "pdfjs-dist";
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { IoIosClose } from "react-icons/io";
// Default layout (optional, remove if not using)
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BsFiletypeHtml } from "react-icons/bs";
import { version as pdfjsVersion } from "pdfjs-dist/package.json";
//import abtimg from '../data/pdfimage.png';
//import docuimg from '../data/excelimage.jpg';
//import outlookimg from '../data/htmlimage.png';
//import rafimg from '../data/docximage.png';
const VectorDB = () => {
  const techniquesData = [
    {
      id: 1,
      index: 1,
      name: "Hybrid_Search_Method",
      description: "Description for Technique 1",
    },
    {
      id: 2,
      index: 1,
      name: "Hybrid_Search_Score_Method",
      description: "Description for Technique 2",
    },
    {
      id: 3,
      index: 1,
      name: "HyDE_Search_Method",
      description: "Description for Technique 3",
    },
    {
      id: 4,
      index: 1,
      name: "Hierarchical_Search_Method",
      description: "Description for Technique 4",
    },
    {
      id: 5,
      index: 1,
      name: "SmallToBig_Parent_Child_Retriever",
      description: "Description for Technique 5",
    },
    {
      id: 6,
      index: 1,
      name: "SmallToBig_Sentence_Window_Retriever",
      description: "Description for Technique 6",
    },
    {
      id: 7,
      index: 1,
      name: "Similarity_Search_Method",
      description: "Description for Technique 7",
    },
    {
      id: 8,
      index: 1,
      name: "Similarity_Score_Search_Method",
      description: "Description for Technique 8",
    },
    {
      id: 9,
      index: 1,
      name: "Vector_Search_Method",
      description: "Description for Technique 9",
    },
    {
      id: 10,
      index: 1,
      name: "Hybrid_MMRS_Score_Method",
      description: "Description for Technique 10",
    },
    {
      id: 11,
      index: 1,
      name: "MMRS_With_Score_Method",
      description: "Description for Technique 11",
    },
    {
      id: 12,
      index: 0,
      name: "Hybrid_Semantic_Search_With_Score",
      description: "Description for Technique 12",
    },
    {
      id: 12,
      index: 0,
      name: "Hybrid_Semantic_Search",
      description: "Description for Technique 12",
    },
  ];
  const defaultLayout = defaultLayoutPlugin();
 

  const [selectedTechniques, setSelectedTechniques] = useState([
    techniquesData[0].name,
    techniquesData[1].name,
  ]);
  const { home, setHome, playgrond, setPlaygrond, vertorDB, setVectorDB } =
    useStateContext();
  const [pdfFile, setPdfFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [message, setMessage] = useState(''); 
  const [errmessage, setErrMessage] = useState(''); 
  const [pdfFiles, setPdfFiles] = useState([]); // Store multiple files
  const [htmlLinks, setHtmlLinks] = useState([]); // Store multiple files
  const [pdfFileType, setPdfFileType] = useState(null);
  const [userInputLink, setUserInputLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExisting, setIsExisting] = useState(true);
  const toggleState = () => {
    setIsExisting(!isExisting);
  };
  const handleFileChange = (event) => {
    console.log("chan")
    console.log("File input event:", event.target.files);
    const files = Array.from(event.target.files); // Convert FileList to array
  
    // Filter valid files (PDF and HTML)
    const validFiles = files.filter(
      (file) => file.type === "application/pdf" || file.type === "text/html"
    );
  
    // Alert if no valid files are selected
    if (validFiles.length === 0) {
      alert("Please upload valid PDF or HTML files.");
      return;
    }
  
    // Map valid files to include metadata
    const newFiles = validFiles.map((file) => ({
      fileObject: file,
      name: file.name,
      type: file.type, 
      timestamp: Date.now(),// Keep track of file type for further use
    }));
  
    // Generate preview URL for the first valid file
    if (newFiles.length > 0) {
      const firstFileURL = URL.createObjectURL(newFiles[0].fileObject);
      console.log("firstfileurl",firstFileURL)
      setPdfFile(firstFileURL);
      setPdfFileType(newFiles[0].fileObject.type)
       // Assuming setPdfFile is for preview
    }
  
    // Append new files to the existing state
    setPdfFiles((prev) => [...prev, ...newFiles]);
    event.target.value = null;
  };
  
  

  // Log the pdfFiles when state changes
  useEffect(() => {
    console.log("Updated pdfFiles:", pdfFiles);
  }, [pdfFiles]); // This will run after pdfFiles state is updated
 
  const handlePdfClick = (fileObject) => {
    console.log("selectedpdf", fileObject);

    // Update the selected PDF file object for the viewer
    const ffileURL = URL.createObjectURL(fileObject.fileObject); // Use the fileObject's file here
    console.log("File URL: ", fileObject.type);
    setPdfFile(ffileURL); // Debugging the generated blob URL
    setPdfFileType(fileObject.type); // Set the file type dynamically
   
  };
  const handlePdfRemove = (fileObject) => {
    console.log("removepdf", fileObject);
     // Filter out the file to be removed
     const updatedFiles = pdfFiles.filter((file) => file.name !== fileObject.name);
     console.log("updatedpdfFIles",!updatedFiles)
     // Update the state with the remaining files
     setPdfFiles(updatedFiles);
     setMessage('')
     setErrMessage('')
     console.log("updated files",updatedFiles.length)
      if(updatedFiles.length ===0) {
      console.log("empty")
      setPdfFiles([])
      setPdfFile();
      console.log("pdffile",pdfFiles) // Reset if no files exist
    }
    else{
      const firstFileURL = URL.createObjectURL(updatedFiles[0].fileObject);
      console.log("firstfileurl",firstFileURL)
      setPdfFile(firstFileURL);
      setPdfFileType(updatedFiles[0].fileObject.type)
    }
   
  };
  useEffect(() => {
    console.log("Updated pdfFiles:", pdfFiles);
  }, [pdfFiles]); // This will run after pdfFiles state is updated
  const handleCreateIndex = async () => {
    if (pdfFiles.length === 0) {
      alert('No PDF files to upload!');
      return;
    }
   
    if (selectedTechniques.length === 0) {
      alert('No techniques selected!');
      return;
    }
    setIsLoading(true);
    // Create a FormData object
    const formData = new FormData();
   
    pdfFiles.forEach((file) => {
      formData.append('files', file.fileObject); // 'files' is the key used in the backend
    });
    formData.append('techniques', JSON.stringify(selectedTechniques));
    try {
      const response = await fetch('http://localhost:3001/create_documents', {
        method: 'POST',
        body: formData, // Send FormData directly
      });
   
      if (!response.ok) {
        throw new Error(`Failed to upload files: ${response.statusText}`);
      }
   
      const data = await response.json();
      setMessage('Index created successfully!');
      
    } catch (error) {
      console.error('Error creating index:', error);
      setErrMessage(`Error creating index: ${error.message}`)
    }finally {
      setIsLoading(false);
    }
  };

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
    setUserInputLink(event.target.value);
   
  };

  const addLinkToList = () => {
    if (userInputLink.trim()) {
      setHtmlLinks([...htmlLinks, userInputLink]);
      setUserInputLink(""); // Clear the input after adding
    } else {
      alert("Please enter a valid link.");
    }
  };
  const handleRemoveLink = (linkToRemove) => {
    setHtmlLinks((prevLinks) => prevLinks.filter((link) => link !== linkToRemove));
    setMessage('')
    setErrMessage('')
  };
  
console.log("links",htmlLinks)
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebarContent">
          <div className="button-container">
            <NavLink
              onClick={() => {
                setHome(true);
                setPlaygrond(false);
                setVectorDB(false);
              }}
              to="/home"
              key="Home"
            >
              <button className="home-button">Home</button>
            </NavLink>
            <NavLink
              onClick={() => {
                setHome(false);
                setPlaygrond(false);
                setVectorDB(true);
              }}
              to="/vectorDB"
              key="vectorDB"
            >
              <button className="home-button ">Vector DB</button>
            </NavLink>
            <NavLink
              onClick={() => {
                setHome(false);
                setPlaygrond(true);
                setVectorDB(false);
              }}
              to="/evaluation"
              key="evaluation"
            >
              <button className="home-button ">Playground</button>
            </NavLink>
            <button className="home-button ">EvalFrame</button>
          </div>
        
          <ul>
            {techniquesData.map((technique) => (
              <li key={technique.id}>
                <label
                  className={technique.index === 0 ? "disabled-technique" : ""}
                >
                  <input
                    type="checkbox"
                    checked={selectedTechniques.includes(technique.name)}
                    onChange={() => toggleTechnique(technique.name)}
                    disabled={technique.index === 0} // Disable if index is 0
                  />
                  {technique.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
       {/* <div className="sidenavimg flex justify-center">
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
   
      </div> */}
      </div>
     
   
      <div className="content">
         <div className="toggle-container">
      {/* Label for "Create" */}
     
 
      {/* Toggle switch */}
      <div
        className={`toggle-switch ${isExisting ? "" : "active"}`}
        onClick={toggleState}
      >
        <div className="toggle-knob"></div>
      </div>
       {/* Label for "Existing" */}
       <span className="toggle-label">Add Link</span>
    </div>  
      {isExisting ?  <div className="upload-container">
        <input
  id="file-upload"
  type="file"
  multiple
  accept="application/pdf, text/html"
  onChange={handleFileChange}
  className="hidden-input"
/>
<label htmlFor="file-upload" className="drag-label">
  Drag & drop a PDF or HTML file here, or click to browse
</label>
      
        </div>
        :
          <div className="link-container" key="id">
                <textarea
                  id="links"
                  className="link-input"
                  placeholder=""
                  value={userInputLink}
                  onChange={handleInputChange}
                ></textarea>
             
              
             <button className="addlink-button " onClick={addLinkToList}>Add Link</button>
              </div>}
        <div className="flex">
        <div className="file-info">
  {pdfFiles.length > 0 && (
    <div>
      <p className="text-left text-2xl font-bold">Files</p>

      <div className="pdf-list mt-2 ml-2">
        {pdfFiles.map((file, index) => (
          <div key={index} className="flex items-center mb-2">
            {/* Icon based on file type */}
           
            {file.type === "application/pdf" ? (
              <FaRegFilePdf
                style={{
                  color: "#FF0000",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <BsFiletypeHtml
                style={{
                  color: "#1E90FF",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
              />
            )}
            {/* File Name */}
            <p
               className="ml-1 text-left truncate"
               style={{
                 cursor: "pointer",
                 
                 color: "black",
                 overflow: "hidden", // Prevent overflowing text
                 whiteSpace: "nowrap", // Prevent wrapping to the next line
                 textOverflow: "ellipsis", // Add ellipsis for overflow
                 maxWidth: "85%", // Adjust the width as needed
               }}
              onClick={() => handlePdfClick(file)}
            >
              {file.name}
            </p>
            {/* Remove File */}
            <IoIosClose
              className="ml-4"
              style={{ cursor: "pointer" }}
              onClick={() => handlePdfRemove(file)}
            />
          </div>
        ))}
      </div>

    </div>
  )}
 
  {htmlLinks.length > 0 && (
  <div>
    {/* Heading */}
    <p className="text-left  text-2xl font-bold mt-6">Links</p>

    {/* List of links */}
    <div className="link-list mt-2 ml-2">
      {htmlLinks.map((link, index) => (
      <div key={index} className="flex items-center mb-2">
      {/* Icon for links */}
      <BsFiletypeHtml
        style={{
          color: "#1E90FF",
          marginTop: "2px",
          cursor: "pointer",
          flexShrink: 0, // Prevent shrinking of the icon
        }}
      />
    
      {/* Link Name */}
      <p
        className="ml-1 text-left truncate"
        style={{
          cursor: "pointer",
         
          color: "black",
          overflow: "hidden", // Prevent overflowing text
          whiteSpace: "nowrap", // Prevent wrapping to the next line
          textOverflow: "ellipsis", // Add ellipsis for overflow
          maxWidth: "85%", // Adjust the width as needed
        }}
        onClick={() => window.open(link, "_blank")}
      >
        {link}
      </p>
    
      {/* Remove Link */}
      <IoIosClose
        className="ml-4"
        style={{
          cursor: "pointer",
          flexShrink: 0, // Prevent shrinking of the remove icon
        }}
        onClick={() => handleRemoveLink(link)}
      />
    </div>
    
      ))}
    </div>
  </div>
)}
{(pdfFiles.length>0 || htmlLinks.length>0) && <div className="mt-5">
        {/* Button and Status */}
        <button
        className="home-button"
        onClick={handleCreateIndex}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Create Index"}
      </button>
      {isLoading && (
        <div className="progress-bar-container mt-3">
          <div className="progress-bar"></div>
        </div>
      )}
      {!isLoading && message && (
        <p className="message-box">{message}</p> // Display the success or error message
      )}
      {!isLoading && errmessage && (
        <p className="message-box1">{errmessage}</p> // Display the success or error message
      )}
</div>}
</div>


          <div className="pdf-info ml-2">
          {pdfFile && (
  <div>
    <div className="pdf-container">
      {console.log("filetype",pdfFile)}
      {pdfFileType === "application/pdf" ? (
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
          {pdfFile ? (
            <Viewer fileUrl={pdfFile} plugins={[defaultLayout]} />
          ) : (
            <p>No PDF selected</p>
          )}
        </Worker>
      ) : pdfFileType === "text/html" ? (
        <iframe
          src={pdfFile}
          title="HTML Preview"
          className="html-preview"
          style={{ width: "100%", height: "98vh", border: "none" }}
        ></iframe>
      ) : (
        <p>No file selected</p>
      )}
    </div>
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorDB;
