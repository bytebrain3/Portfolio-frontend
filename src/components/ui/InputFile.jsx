import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const InputFile = ({ onFileUpload }) => { 
    const fileData = useRef(null);
    const [file, setFile] = useState(null);

    // Trigger file input click when div is clicked
    const handleClick = () => {
        fileData.current.click();
    };

    // Handle file selection and log the file
    const handleFileChange = () => {
        if (fileData.current.files.length > 0) {
            const selectedFile = fileData.current.files[0];
            setFile(selectedFile);
            onFileUpload(selectedFile);  // Pass the file to the parent component
        }
    };

    // Handle file removal
    const removeFile = () => {
        setFile(null); // Reset the file state to remove the image
        fileData.current.value = ""; // Clear the input field value
    };

    return (
        <div className="w-full h-64 rounded flex flex-col justify-center items-center cursor-pointer p-3 bg-white dark:bg-black">
            {file ? (
                <div className="w-full lg:h-64 h-52 rounded flex items-center justify-center relative">
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Uploaded File"
                        className="w-full lg:max-w-2xl lg:h-56 lg:rounded-lg h-52 lg:h-64 rounded object-fill"
                    />
                    <FaTimes
                        size={32}
                        className="absolute top-2 right-2 cursor-pointer text-white bg-gray-800 rounded-full p-1 z-10"
                        onClick={removeFile}
                    />
                </div>
            ) : (
                <div className="w-full text-black dark:text-white lg:h-64 h-52 rounded border border-dashed flex justify-center items-center" onClick={handleClick}>
                    <p>Click to upload file</p>
                </div>
            )}

            <input
                type="file"
                className="hidden"
                ref={fileData}
                onChange={handleFileChange}
                accept="image/*" // Restrict file input to images
            />
        </div>
    );
};

export default InputFile;
