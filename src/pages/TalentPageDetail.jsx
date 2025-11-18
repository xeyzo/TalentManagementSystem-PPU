import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faUser, faPhone, faEnvelope, faMapMarkerAlt, faLink, faArrowLeft, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/TalentPageDetail.css';
import userAvatar from '../assets/img/Rectangle.png';
import backgroundDetail from '../assets/img/backgrounddetail.jpg';

function TalentPageDetail() {
  return (
    <div className="profile-page-background">
      <div className="container-lg my-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card profile-header-card border-0 shadow-sm mb-4">
              <div className="profile-banner">
                <img src={backgroundDetail} alt="Banner" className="profile-banner-image" />
                <button className="btn btn-sm edit-icon-absolute" type="button" style={{ backgroundColor: "#F8F9FA3D" }}>
                  <FontAwesomeIcon icon={faPencil} style={{ color: "white" }} />
                </button>
              </div>
              <div className="card-body">
                <img
                  src={userAvatar}
                  alt="Profile"
                  className="rounded-circle profile-picture"
                />
                <h4 className="mt-3 mb-0">Bessie Cooper</h4>
                <p className="card-text text-muted">cooper@email.com</p>
                <hr className="my-4" />
                <h5 className="mb-4">Personal Information</h5>
                <div className="d-flex align-items-start mb-3">
                  <FontAwesomeIcon icon={faUser} className="text-primary me-3 mt-1" style={{ width: '20px' }} />
                  <div>
                    <small className="text-muted">Name</small>
                    <p className="mb-0 fw-medium">Bessie Cooper</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <FontAwesomeIcon icon={faPhone} className="text-primary me-3 mt-1" style={{ width: '20px' }} />
                  <div>
                    <small className="text-muted">Phone Number</small>
                    <p className="mb-0 fw-medium">(225) 555-0118</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3 mt-1" style={{ width: '20px' }} />
                  <div>
                    <small className="text-muted">Email</small>
                    <p className="mb-0 fw-medium">cooper@email.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3 mt-1" style={{ width: '20px' }} />
                  <div>
                    <small className="text-muted">Preferred Position</small>
                    <div>
                      <span className="badge rounded-pill bg-light text-dark me-1 border">Backend Dev</span>
                      <span className="badge rounded-pill bg-light text-dark border">Frontend Dev</span>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h5 className="mb-4">Social Media</h5>
                <div className="d-flex align-items-start mb-3">
                  <div>
                    <small className="text-muted">LinkedIn Profile URL</small>
                    <p className="mb-0 fw-medium text-primary">http://www.linkedin.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div>
                    <small className="text-muted">Instagram</small>
                    <p className="mb-0 fw-medium text-primary">http://www.instagram.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <FontAwesomeIcon icon={faLink} className="text-primary me-3 mt-1" style={{ width: '20px' }} />
                  <div>
                    <small className="text-muted">Link Portfolio</small>
                    <p className="mb-0 fw-medium text-primary">http://www.Portfolio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex justify-content-end align-items-center mb-2">
              <button className="btn btn-secondary me-2" type="button">
                <FontAwesomeIcon icon={faArrowLeft} className="me-1" />
                Kembali
              </button>
              <button className="btn btn-danger me-2" type="button">
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                Delete
              </button>
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faDownload} className="me-1" />
                Download
              </button>
            </div>
            <div className="styled-card-container">
              <div className="d-flex justify-content-between align-items-center styled-card-header">
                <h6 className="mb-0 text-primary">Skills</h6>
                <button className="btn btn-light btn-sm" type="button"><FontAwesomeIcon icon={faPencil} className="text-primary" /></button>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Java</span>
                      <span className="text-muted">80%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>CSS</span>
                      <span className="text-muted">40%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>HTML</span>
                      <span className="text-muted">70%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>PHP</span>
                      <span className="text-muted">90%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-1">
                      <span>Javascript</span>
                      <span className="text-muted">80%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="styled-card-container">
              <div className="d-flex justify-content-between align-items-center styled-card-header">
                <h6 className="mb-0 text-primary">Education</h6>
                <button className="btn btn-light btn-sm" type="button">
                  <FontAwesomeIcon icon={faPencil} className="text-primary" />
                </button>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h6 className="mb-0">Bachelor's Degree -</h6>
                      <small className="text-muted">University of Example</small>
                    </div>
                    <small className="text-muted">2023 - Current</small>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h6 className="mb-0">Bachelor's Degree -</h6>
                      <small className="text-muted">University of Example</small>
                    </div>
                    <small className="text-muted">2021 - 2023</small>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h6 className="mb-0">Bachelor's Degree -</h6>
                      <small className="text-muted">University of Example</small>
                    </div>
                    <small className="text-muted">2018 - 2021</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="styled-card-container">
              <div className="d-flex justify-content-between align-items-center styled-card-header">
                <h6 className="mb-0 text-primary">Experience</h6>
                <button className="btn btn-light btn-sm" type="button">
                  <FontAwesomeIcon icon={faPencil} className="text-primary" />
                </button>
              </div>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h6 className="mb-0">Frontend Engineer</h6>
                      <small className="text-muted">PT ABC</small>
                    </div>
                    <small className="text-muted">2023 - Current</small>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h6 className="mb-0">Web Developer</h6>
                      <small className="text-muted">PT DEF</small>
                    </div>
                    <small className="text-muted">2021 - 2023</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPageDetail;
