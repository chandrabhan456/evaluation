import React,{useState} from "react";
import "./MainPage.css"; 
import "./container.css";
import "../App.css";
import avatar from "../data/docuInSights_logo.png";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
const Container = ({ logo, name, description, tags, url }) => {
  return (
    <div
      className="container"
      onClick={() => window.open(url, "_blank")} // Open Streamlit URL in a new tab
      style={{ cursor: "pointer" }} // Indicate clickable containers
    >
      <div className="container-content">
        <div className="header">
          <img src={logo} alt={`${name} logo`} className="logo" />
          <h3 className="name">{name}</h3>
        </div>
        <p className="description">{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="tag1">
          <span>Demo</span>
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [InputText, setInputText] = useState("");
  const data = [
    {
      logo: avatar,
      name: "DocuInSights",
      description: " This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "CONSOLE"],
      url: "https://genaisql-test1.azurewebsites.net/" // Streamlit app URL
    },
    {
      logo: avatar,
      name: "Data Services1",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "PII EXTRACTION"],
      url: "http://localhost:8502"
    },
    {
      logo: avatar,
      name: "DocParser1",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "PARSE FILES"],
      url: "http://localhost:8503"
    },
    {
      logo: avatar,
      name: "Embedder1",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "VECTORIZATION"],
      url: "http://localhost:8504"
    },
    {
      logo: avatar,
      name: "Evaluation1",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["TOOLKIT", "1.0", "LLM MODEL"],
      url: "http://localhost:8505"
    },
    {
      logo: avatar,
      name: "File Finder1",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "SHAREPOINT"],
      url: "http://localhost:8506"
    },
    {
      logo: avatar,
      name: "Global RAG1",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["TOOLKIT", "1.0", "INDEXING"],
      url: "http://localhost:8507"
    },
    {
      logo: avatar,
      name: "Golden Data1 ",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "DATA GENERATOR"],
      url: "http://localhost:8508"
    },
    {
      logo: avatar,
      name: "Golden Data2 ",
      description: "This component enables users to create Insights from Documents into formatted excels",
      tags: ["COMPONENT", "1.0", "DATA GENERATOR"],
      url: "http://localhost:8508"
    }
  ];
 
  const ordersData3 = data;
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
 
  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
    console.log("Vidhi",e.target.value.toLowerCase())
  };
  const records1 = ordersData3.filter((el) => {
    if (el === "") {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(InputText) ||
        el.description.includes(InputText) ||
        el.tags.includes(InputText)
      );
    }
  });
  const records = records1.slice(firstIndex, lastIndex);
  return (
    <div >
      <div className="flex mt-16">
        <div className="list whitespace-nowrap">Showing 8 of 9</div>
        <div className="search-bar-container mt-2 ">
        <input
          type="text"
          placeholder="Search..."
          className=" search-bar"
         
          onChange={inputHandler}
          
        />
      </div>
      </div>
      <div className="main-page">
      <div className="container-grid">
        {records.map((item, index) => (
          <Container
            key={index}
            logo={item.logo}
            name={item.name}
            description={item.description}
            tags={item.tags}
            url={item.url}
          />
        ))}
       
      </div>
     
     
  <div className="flex pagination">
    <div className=" mt-5" style={{ marginRight: '25px' }}>
      <a href="#" className="text-black dark:text-white" onClick={prePage}>
        <HiOutlineChevronLeft />
      </a>
    </div>
  
    <div className=" mt-5" style={{ marginRight: '45px' }}>
      <a href="#" className="text-black dark:text-white" onClick={nextPage}>
        <HiOutlineChevronRight />
      </a>
    </div>
  </div>
</div>

</div>

      
   
  );
  function prePage() {
    if (currentPage != firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (ordersData3.length > lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default MainPage;
