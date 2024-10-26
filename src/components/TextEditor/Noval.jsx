import { Editor } from "novel-lightweight";
import { useState,useEffect } from 'react';

const Novel = (onContentChange) => {
  const [data, setData] = useState("");
  /*useEffect(() => {
    if(data){
      onContentChange(data)
    }
  }, [data])
  */
  return (
    <>
      <Editor
        defaultValue={data}
        disableLocalStorage={false}
        onUpdate={(editor) => {
          if (editor && editor.storage && editor.storage.html) {
            const htmlContent = editor.storage.html.getHtml();
            setData(htmlContent);
          }
        }}
            className="bg-white min-w-full text-black dark:bg-black dark:text-white"
            />
    </>
  );
};

export default Novel;