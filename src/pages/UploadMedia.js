import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadMedia = () => {
  const [media, setMedia] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // For navigating after successful upload

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);  // Store the file in the media state
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!media) {
      setErrorMessage('Please select a file to upload');
      return;
    }

    const token = localStorage.getItem('token');  // Get the JWT token

    const formData = new FormData();
    formData.append('media', media);  // Append the selected file to the form data

    try {
      const response = await fetch('http://localhost:5000/api/media/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,  // Include token in request headers
        },
        body: formData,  // Send the form data with the file
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to a different page after successful upload (e.g., dashboard)
        navigate('/upload_success');  
      } else {
        setErrorMessage(data.message || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setErrorMessage('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="upload-media">
      <h2>Upload Media</h2>
      
      <input type="file" onChange={handleFileChange} />
      
      {media && media.type.startsWith("image") && (
        <img src={URL.createObjectURL(media)} alt="Preview" width="100" />
      )}

      {media && media.type.startsWith("video") && (
        <video controls width="200">
          <source src={URL.createObjectURL(media)} type={media.type} />
          Your browser does not support the video tag.
        </video>
      )}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMedia;

