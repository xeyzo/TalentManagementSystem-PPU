import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faFilePdf, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Modal.css'; 

const ModalUploadCV = ({ onClose, isOpen, onUpload }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef({});

  useEffect(() => {
    const filesToAnimate = files.filter(f => f.progress < 100 && !intervalRef.current[f.name]);

    filesToAnimate.forEach(fileToAnimate => {
      intervalRef.current[fileToAnimate.name] = setInterval(() => {
        setFiles(currentFiles =>
          currentFiles.map(f => {
            if (f.name === fileToAnimate.name && f.progress < 100) {
              const newProgress = f.progress + 10;
              if (newProgress >= 100) {
                clearInterval(intervalRef.current[fileToAnimate.name]);
                delete intervalRef.current[fileToAnimate.name];
                return { ...f, progress: 100 };
              }
              return { ...f, progress: newProgress };
            }
            return f;
          })
        );
      }, 100);
    });
  }, [files]);

  useEffect(() => {
    return () => {
      Object.values(intervalRef.current).forEach(clearInterval);
    };
  }, []);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [
      ...prevFiles,
      ...selectedFiles.map(file => ({
        file,
        name: file.name,
        size: file.size,
        progress: 10,
        uploaded: false,
        error: null,
      }))
    ]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [
      ...prevFiles,
      ...droppedFiles.map(file => ({
        file,
        name: file.name,
        size: file.size,
        progress: 10,
        uploaded: false,
        error: null,
      }))
    ]);
  };

  const handleDeleteFile = (fileName) => {
    clearInterval(intervalRef.current[fileName]);
    delete intervalRef.current[fileName];
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleSubmit = () => {
    onUpload(files);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <div className="modal-header">
          <h2 style={{color:"#104D9C", fontWeight:"lighter"}}>Upload CV Talent</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="modal-body m-2">
          <div
            className={`upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              id="file-upload-input"
              className="file-input"
              accept=".pdf"
            />
            <label htmlFor="file-upload-input" className="upload-label">
              <FontAwesomeIcon icon={faCloudArrowUp} size="2x" className="upload-icon" />
              <p className="upload-text">Clicks here to upload your files</p>
              <p className="upload-info">Max 5mb</p>
            </label>
          </div>

          <div className="uploaded-files-list">
            {files.map((fileData, index) => (
              <div key={fileData.name} className="uploaded-file-item">
                <FontAwesomeIcon icon={faFilePdf} className="file-icon" />
                <span className="file-name">{fileData.name}</span>
                {fileData.progress < 100 ? (
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ 
                        width: `${fileData.progress}%`,
                        backgroundColor: '#104D9C' 
                      }}
                    ></div>
                  </div>
                ) : (
                  <button className="delete-button" onClick={() => handleDeleteFile(fileData.name)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                )}
                {fileData.progress < 100 && (
                     <button className="delete-button close-progress-button" onClick={() => handleDeleteFile(fileData.name)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="submit-button" onClick={handleSubmit} disabled={files.length === 0}>Submit</button>
        </div>

      </div>
    </div>
  );
};

export default ModalUploadCV;
