import React, { useState } from 'react';
import Button from "@ui/Button.jsx";
import axiosInstance from '@/axiosInstance';

const TestPage = () => {
  const [error, setError] = useState('');
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const handleVerifyOtp = async () => {
    setIsLoading(true); // Start loading

    try {
      const config = {
        method: 'GET',
        url: '/api/v1/blog/admin/blogs',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axiosInstance.request(config);

      // If request is successful
      if (response.data.success) {
        setError(response.data.message); // Display success message
        setData(response.data.data)
      } else {
        setError(response.data.message); // Display fallback error message
      }

    } catch (err) {
      // Display specific error messages
      const errorMessage = err.message === "Network Error" 
        ? 'Network Error. Please try again.' 
        : 'Verification failed. Please try again.';
      setError(err.response.data.message);
      console.log(err)
    } finally {
      setIsLoading(false); // Reset loading status
    }
  };

  return (
    <div>
      <Button 
        onClick={handleVerifyOtp}
        variant="dark"
        className="w-full"
        loading={isLoading} // Pass loading state to Button
      >
        Verify
      </Button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      
      { data &&
        JSON.stringify({
          data
        }) 
      }
    </div>
  );
};

export default TestPage;
