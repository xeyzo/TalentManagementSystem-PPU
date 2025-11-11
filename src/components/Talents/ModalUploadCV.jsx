import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faFilePdf, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// Pastikan path ke CSS Anda benar
import '../../assets/css/Modal.css'; 

const ModalUploadCV = ({ onClose, isOpen }) => {
  // ✅ HOOKS DI ATAS
  // Semua hook (useState, useEffect) harus dipanggil di top-level
  // sebelum 'return' kondisional.
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  React.useEffect(() => {
    const fileToUpload = files.find(f => !f.uploaded && f.progress < 100);
    if (fileToUpload) {
      const interval = setInterval(() => {
        setFiles(prevFiles => prevFiles.map(f => {
          if (f.name === fileToUpload.name) {
            const newProgress = Math.min(f.progress + 10, 100);
            return { ...f, progress: newProgress, uploaded: newProgress === 100 };
          }
          return f;
        }));
      }, 300); // Setiap 300ms, progress bertambah

      return () => clearInterval(interval);
    }
  }, [files]);

  // --- Handlers ---
  
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [
      ...prevFiles,
      ...selectedFiles.map(file => ({
        file,
        name: file.name,
        size: file.size,
        progress: 10, // Mulai dari 10% agar loading langsung terlihat
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
        progress: 10, // Mulai dari 10% agar loading langsung terlihat
        uploaded: false,
        error: null,
      }))
    ]);
  };

  const handleDeleteFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleSubmit = () => {
    console.log("Submitting files:", files.map(f => f.name));
    // Implementasi logika upload ke server di sini
    onClose();
  };

  // ✅ PERBAIKAN "RULES OF HOOKS"
  // 'Return' kondisional dipindah ke sini (setelah semua hook dipanggil).
  if (!isOpen) {
    return null;
  }

  // --- Render JSX ---

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <div className="modal-header">
          <h2 className="primary">Upload CV Talent</h2>
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
              accept=".pdf" // Hanya terima PDF
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
                      style={{ width: `${fileData.progress}%` }}
                    ></div>
                  </div>
                ) : (
                  // Tombol hapus jika file sudah terupload
                  <button className="delete-button" onClick={() => handleDeleteFile(fileData.name)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                )}
                {/* Tombol "X" untuk file yang sedang diupload */}
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