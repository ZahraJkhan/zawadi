import React, { useState } from 'react';

const UploadMedia = () => {
  const [media, setMedia] = useState(null);

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);  // Store the file in the media state
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // API call to upload the media
    console.log("Uploading file:", media);
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
      
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMedia;
