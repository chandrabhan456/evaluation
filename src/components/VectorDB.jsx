import React, { useState } from 'react';

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
  const defaultLayout = defaultLayoutPlugin();
  const pdfUrl = {samplePDF}

   const [selectedTechniques, setSelectedTechniques] = useState([techniquesData[0].name, techniquesData[1].name]);
   const {home,setHome,playgrond,setPlaygrond,vertorDB,setVectorDB} = useStateContext();
   const [pdfFile, setPdfFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            const fileUrl = URL.createObjectURL(file);
            setPdfFile(fileUrl);
            setFileName(file.name);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };
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
             
            
              <div className="upload-container">
                <input
                    id="pdf-upload"
                    type="file"
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
                {fileName && (
                <div >
                  <div className='flex'>
                    <FaRegFilePdf style={{color:'#FF0000',marginTop:'2px'}}/>
                    <p className='ml-1'>
                        {fileName}
                    </p>

                    </div>
                    <button className='home-button'>Create Index</button>
                </div>
                
            )}
            </div>
            <div className="pdf-info ml-2">
                {fileName && (
                <div >
                  <div className='flex'>
                  <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
                <Viewer fileUrl={pdfFile} plugins={[defaultLayout]} />
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
