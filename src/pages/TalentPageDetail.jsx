import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faUser, faPhone, faEnvelope, faMapMarkerAlt, faLink, faArrowLeft, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/TalentPageDetail.css';
import userAvatar from '../assets/img/Rectangle.png';
import backgroundDetail from '../assets/img/backgrounddetail.jpg';

function TalentPageDetail() {
  return (
    <div className="container-fluid py-4 px-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card profile-header-card border-0 shadow-sm mb-4">
            <div className="profile-banner">
              <img src={backgroundDetail} alt="Banner" className="profile-banner-image" />
              <button className="btn btn-sm edit-icon-absolute bg-translucent-white" type="button">
                <FontAwesomeIcon icon={faPencil} style={{ color: "white" }} />
              </button>
            </div>
            <div className="card-body p-4">
              <img
                src={userAvatar}
                alt="Profile"
                className="rounded-circle profile-picture"
              />
              <h5 className="mt-3 mb-1">Bessie Cooper</h5>
              <p className="fw-semibold fs-small" style={{ color: "#6A7178" }}>cooper@email.com</p>
              <h6 className="mb-4 mt-4 text-primary">Basic Information</h6>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faUser} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">Name</small>
                  <p className="mb-0 fw-normal">Bessie Cooper</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faPhone} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">Phone Number</small>
                  <p className="mb-0 fw-normal">(225) 555-0118</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">Email</small>
                  <p className="mb-0 fw-normal">cooper@email.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">Preferred Position</small>
                  <div>
                    <span className="badge rounded-pill bg-light text-dark border">Backend Dev</span>
                    <span className="badge rounded-pill bg-light text-dark border">Frontend Dev</span>
                  </div>
                </div>
              </div>

              <h6 className="mb-4 mt-4 text-primary">Social Media</h6>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLinkedin} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">LinkedIn Profile URL</small>
                  <p className="mb-0 fw-normal text-primary">http://www.linkedin.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faInstagram} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">Instagram</small>
                  <p className="mb-0 fw-normal text-primary">http://www.instagram.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLink} className="text-primary icon-size-20" />
                </div>
                <div>
                  <small className="text-light-gray">Link Portfolio</small>
                  <p className="mb-0 fw-normal text-primary">http://www.Portfolio.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="d-flex justify-content-end align-items-center mb-2">
            <button type="button" className="btn btn-outline-primary me-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                <path d="M4.29167 8.08333L0.5 4.29167M0.5 4.29167L4.29167 0.5M0.5 4.29167H8.4625C9.01022 4.29167 9.55258 4.39955 10.0586 4.60915C10.5646 4.81876 11.0244 5.12598 11.4117 5.51328C11.799 5.90057 12.1062 6.36036 12.3158 6.86639C12.5255 7.37242 12.6333 7.91478 12.6333 8.4625C12.6333 9.01022 12.5255 9.55258 12.3158 10.0586C12.1062 10.5646 11.799 11.0244 11.4117 11.4117C11.0244 11.799 10.5646 12.1062 10.0586 12.3158C9.55258 12.5255 9.01022 12.6333 8.4625 12.6333H5.80833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
            <button className="btn btn-danger me" type="button">
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 3.53333H14.15M12.6333 3.53333V14.15C12.6333 14.9083 11.875 15.6667 11.1167 15.6667H3.53333C2.775 15.6667 2.01667 14.9083 2.01667 14.15V3.53333M4.29167 3.53333V2.01667C4.29167 1.25833 5.05 0.5 5.80833 0.5H8.84167C9.6 0.5 10.3583 1.25833 10.3583 2.01667V3.53333M5.80833 7.325V11.875M8.84167 7.325V11.875" stroke="#DC3545" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
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
              <div className="card-body p-8">
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
  );
}

export default TalentPageDetail;
