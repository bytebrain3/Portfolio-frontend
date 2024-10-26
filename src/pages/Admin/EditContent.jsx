import React, { useState ,useEffect} from 'react';
import BlogList from '@components/BlogList.jsx';

import Input from "@ui/Input.jsx";
import InputFile from "@ui/InputFile.jsx";
import Button from "@ui/Button.jsx";
import ThemeToggle from "@ui/ThemeToggle.jsx";
import ItemsInput from "@ui/ItemsInput.jsx";
import Noval from "@components/TextEditor/Noval.jsx";

const EditContent = (url) => {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [metaTag, setMetaTag] = useState('')
  const [itemsData, setItemsData] = useState([]);
  
  const addFile = (file) => {
    setFile(file);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleItemsAdd = (patternedData) => {
    setItemsData(patternedData);
  };
  const handleMetaTags = (patternedData) => {
    setMetaTag(patternedData);
  };
  const handleInputChange = (e) => {
    setSlug(e.target.value);
  };

  // Convert file to Base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const post = async () => {
    let base64File = null;

    if (file) {
      base64File = await convertFileToBase64(file);
    }
    const content = localStorage.getItem('novel__content')
    const payload = {
      title: title,
      blog: content,
      poster: base64File,  // Base64-encoded file
      slug: slug,
      technology_use : itemsData.split(","),
      metaTag : metaTag.split(","),
    };
    
    
    
  };
  
  
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start text-black dark:text-white dark:bg-black p-2 lg:p-4">
      {/* Fixed Navbar with ThemeToggle */}
      <div className="w-full flex fixed flex-row items-center justify-between p-2 top-0 right-0 left-0 backdrop-blur rounded-b-lg">
        <ThemeToggle className="blur absolute right-5 top-5" />
        <Button 
          onClick={post}
          variant="ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>
        </Button>
      </div>

      {/* Scrollable Content */}
      <div className="mt-12 w-full flex-grow overflow-auto">
        <Input
          className="rounded-t bg-white text-black dark:bg-black dark:text-white text-3xl font-extrabold pl-4 lg:pl-10"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <Input
          className="rounded-t bg-white text-black dark:bg-black dark:text-white pl-4 lg:pl-10"
          placeholder="Enter slug (optional)"
          value={slug}
          onChange={handleInputChange}
        />
        <InputFile 
          onFileUpload={addFile}
        />
       <Noval/>
      <ItemsInput 
        placeholder="Technology use in your projects"
        onItemsAdd={handleItemsAdd} 
      />
      <ItemsInput 
        onItemsAdd={handleMetaTags} 
      />
      </div>
    </div>
  );
};

export default EditContent;
