import React, { useState,useEffect } from 'react';

import { pdfjs } from 'pdfjs-dist';
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import { FaRegFilePdf } from "react-icons/fa";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// Default layout (optional, remove if not using)
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { version as pdfjsVersion } from "pdfjs-dist/package.json";
import samplePDF from '../data/237696_Chandrabhan_Gehlot_Resume.pdf';

const VectorDB = () => {
  const techniquesData = [
    { id: 1,index:1, name: "Hybrid_Search_Method", description: "Description for Technique 1" },
    { id: 2,index:1, name: "HyDE_Search_Method", description: "Description for Technique 2" },
    { id: 3,index:1, name: "Hierarchical_Search_Method", description: "Description for Technique 3" },
    { id: 4, index:1,name: "SmallToBig_Parent_Child_Retriever", description: "Description for Technique 4" },
    { id: 5,index:1, name: "SmallToBig_Sentence_Window_Retriever", description: "Description for Technique 5" },
    { id: 6, index:1,name: "Similarity_Search_Method", description: "Description for Technique 6" },
    { id: 7, index:1,name: "Similarity_Score_Search_Method", description: "Description for Technique 7" },
    { id: 8, index:0,name: "Hybrid_Semantic_Search_With_Score", description: "Description for Technique 8" },
    { id: 9, index:0,name: "Hybrid_Search_With_Score", description: "Description for Technique 9" },
    { id: 10,index:0, name: "Vector_Search_With_Score", description: "Description for Technique 10" },
    { id: 11,index:0, name: "Hybrid_Semantic_Search", description: "Description for Technique 11" },
 
  ];
  const defaultLayout = defaultLayoutPlugin();
  const pdfUrl = {samplePDF}

   const [selectedTechniques, setSelectedTechniques] = useState([techniquesData[0].name, techniquesData[1].name]);
   const {home,setHome,playgrond,setPlaygrond,vertorDB,setVectorDB} = useStateContext();
   const [pdfFile, setPdfFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    const [pdfFiles, setPdfFiles] = useState([]); // Store multiple files

   
      const handleFileChange = (event) => {
       
        const files = Array.from(event.target.files); // Convert FileList to array
      
        // Filter out only PDF files
        const pdfFilesOnly = files.filter(file => file.type === 'application/pdf');
    
        // If no PDF files selected, show alert
        if (pdfFilesOnly.length === 0) {
          alert("Please upload valid PDF files.");
          return;
        }
    
        // Create file URL and name for each selected file
        const newFiles = pdfFilesOnly.map(file => ({
          fileObject: file,
          name: file.name
        }));
        if (newFiles.length === newFiles.length) {
          const ffileURL = URL.createObjectURL(newFiles[0].fileObject);
          setPdfFile(ffileURL)
        }
        // Append new files to the existing state (pdfFiles)
        setPdfFiles((prev) => [...prev, ...newFiles]);
      };
    
      // Log the pdfFiles when state changes
      useEffect(() => {
        console.log("Updated pdfFiles:", pdfFiles);
        
      }, [pdfFiles]); // This will run after pdfFiles state is updated
    
     
      const handlePdfClick = (fileObject) => {
        console.log("selectedpdf", fileObject);
        
       // Update the selected PDF file object for the viewer
        const ffileURL = URL.createObjectURL(fileObject.fileObject); // Use the fileObject's file here
    console.log("File URL: ", ffileURL);
    setPdfFile(ffileURL) // Debugging the generated blob URL

      };
      const handleCreateIndex = async () => {
        if (pdfFiles.length === 0) {
          alert('No PDF files to index!');
          return;
        }
      
        if (selectedTechniques.length === 0) {
          alert('No techniques selected!');
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3000/create_documents', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              pdfFiles,
              selectedTechniques,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`Failed to create index: ${response.statusText}`);
          }
      
          const data = await response.json();
          alert(`Index created successfully! Server response: ${data.message}`);
        } catch (error) {
          console.error('Error creating index:', error);
          alert(`Error creating index: ${error.message}`);
        }
      };
      
      
    const toggleTechnique = (techniqueName) => {
      setSelectedTechniques((prev) => {
        if (prev.includes(techniqueName)) {
          return prev.filter((item) => item !== techniqueName);
        } else if (prev.length) {
          return [...prev, techniqueName];
        }
        return prev;
      });
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
                    <label className={technique.index === 0 ? 'disabled-technique' : ''}>
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
            </div>
      
            <div className="content">
             
            
              <div className="upload-container">
                <input
                    id="pdf-upload"
                    type="file"
                    multiple
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden-input"
                />
                <label htmlFor="pdf-upload" className="drag-label">
                    Drag & drop a PDF file here, or click to browse
                </label>

                </div>
                <div className='flex'>
                <div className="file-info">
                {pdfFiles.length>0 && (
                <div >
             <div className="pdf-list mt-4">
        {pdfFiles.length > 0 && (
          pdfFiles.map((pdf, index) => (
            <div key={index} className="flex items-center mb-2" onClick={() => handlePdfClick(pdf)}>
              <FaRegFilePdf style={{ color: "#FF0000", marginTop: "2px", cursor: "pointer" }} />
              <p className="ml-1" style={{ cursor: "pointer" }}>{pdf.name}</p>
            </div>
          ))
        ) }
      </div>

                    <button className='home-button' onClick={handleCreateIndex}>Create Index</button>
                </div>
                
            )}
            </div>
            <div className="pdf-info ml-2">
                {pdfFile && (
                <div >
                  <div className='pdf-container'>
                  <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
                  {pdfFile ? (
                    <Viewer fileUrl={(pdfFile)} plugins={[defaultLayout]} />
                  ) : (
                    <p>No PDF selected</p>
                  )}
                </Worker>

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
