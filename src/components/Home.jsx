import React, { useState } from "react";
import "./Evaluation.css";
import { FiSend } from "react-icons/fi";
import { useStateContext } from '../contexts/ContextProvider';
import { Link, NavLink } from 'react-router-dom';
import { SiOpenai } from "react-icons/si";
import azureimg from '../data/azuresearchAI.png';
import ragimg from '../data/ragimage.png';
import { SiFlask } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import abtimg from '../data/About_Us.png';
import docuimg from '../data/documentation.png';
import outlookimg from '../data/outlook_icon.jpg';
import rafimg from '../data/reference.png';

const Home = () => {
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
 
  const Intro = [
    {
      id: 1,
      introduction:
        "At RAG Search Insights, we are redefining the search experience by evaluating and optimizing Retrieval-Augmented Generation (RAG) techniques. Our work harnesses the power of Azure AI Search Service to explore and implement innovative approaches for faster, more accurate, and context-rich search results.",
    },
  ];

  const data = [
    {
      id: 1,
      OurExpertise: {
        "Hybrid Search":
          "Merging the power of vector and keyword searches for unparalleled precision.",
        "Vector Search": "Leveraging embeddings for deep semantic understanding.",
        "Keyword Search": "Delivering quick, targeted results with high precision.",
        "Hierarchical Indexing Search":
          "Organizing data for scalable and efficient query handling.",
        "Hypothetical Document Embedding (HyDE)":
          "Generating contextually rich answers with advanced hypothetical embeddings.",
        "Parent-Child Retriever":
          "Structuring results to retain contextual relationships between data entities.",
        "Sentence Window Search":
          "Focusing on granular text fragments for pinpoint accuracy.",
      },
      WhyChoosen:
        "Our platform offers:\n\nComprehensive Analysis: Evaluating latency, response times, and overall performance of various search techniques.\nTailored Solutions: Customizing search strategies based on use cases and industries.\nInnovative Benchmarking: Unveiling insights that help you make data-driven decisions for search optimizations.\nPractical Guidance: Empowering developers and knowledge seekers with tools to practice and implement RAG techniques effectively.",
      OurMission:
        "To simplify complex search methodologies and enable businesses to unlock the true potential of their data. We aim to bridge the gap between cutting-edge AI advancements and real-world applications, transforming how we interact with information.",
      Innovation:
        "Explore the world of smarter search. Join us as we revolutionize how knowledge is discovered and retrieved.",
    },
  ];
  const {home,setHome,playgrond,setPlaygrond,vertorDB,setVectorDB} = useStateContext();
  
  

  

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
                            key='VectorDB'
                           
                           
                          ><button className="home-button ">Vector DB</button></NavLink>
        <NavLink
                onClick={() =>  {setHome(false);setPlaygrond(true);setVectorDB(false) }}
                            to='/evaluation'
                            key=''
                           
                           
                          ><button className="home-button ">Playground</button></NavLink>
        <button className="home-button ">EvalFrame</button>
        </div>
       
        {/* <ul>
          {techniquesData.map((technique) => (
            <li key={technique.id}>
              <label>
              
                {technique.name}
              </label>
            </li>
          ))}
        </ul> */}
        </div>
        <div>
        <p className="mt-5 text-3xl"><strong>RAG Search Techniques Evaluation Tool</strong></p>
        <div className="mt-[135%] flex justify-center">
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
      </div>

      <div className="content">
        
        <div className="flex-container">
        
              <div  className="dynamic-box">
              <div style={{ backgroundColor: "#f5f5f5", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Introduction Container */}
      <div
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <h1 className="text-xl text-blue-600">Introduction</h1>
        <p>{Intro[0].introduction}</p>
      </div>

      {/* Grid of Four Equal Boxes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {/* Our Expertise */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 className="text-xl text-blue-600">Our Expertise</h2>
          <p className="mt-2">We specialize in applying and benchmarking advanced RAG search methodologies</p>
          <ul>
            {Object.entries(data[0].OurExpertise).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 className="text-xl text-blue-600">Why Choose Us?</h2>
          <p className="mt-2">{data[0].WhyChoosen}</p>
        </div>

        {/* Our Mission */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 className="text-xl text-blue-600">Our Mission</h2>
          <p className="mt-2">{data[0].OurMission}</p>
        </div>

        {/* Innovation */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 className="text-xl text-blue-600">Innovation</h2>
          <p className="mt-2">{data[0].Innovation}</p>
        </div>
      </div>
      <div className="mt-10 flex justify-end"><SiOpenai style={{height:"45px",width:"45px",color:'black'}} />
      <SiFlask style={{height:"45px",width:"100px",color:'black'}} />
      <GiArtificialIntelligence style={{height:"45px",width:"80px",color:'black'}} />  
      <img
          style={{width:"100px",marginLeft:"-5px",marginTop:'-8px'}}
          src={azureimg}
          alt="nttlogo"
        />
      <img
          style={{width:"100px",marginLeft:"-5px",marginTop:'-8px'}}
          src={ragimg}
          alt="ragimg"
        />
   
      </div>
    </div>

  
              </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
