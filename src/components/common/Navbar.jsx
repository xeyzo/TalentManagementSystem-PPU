import React from 'react';
import appIcon from '../../assets/img/Vector.png'; 
import userAvatar from '../../assets/img/Rectangle.png'; 
import '../../assets/css/Navbar.css';

function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="row g-0">
        
        <div className="col">
          <a className="px-5 py-3 d-inline-block" href="/">
            <img 
              src={appIcon} 
              alt="Logo Perusahaan" 
              style={{ verticalAlign: 'middle' }} 
            />
          </a>
        </div>

        <div className="col-auto">
          <div 
            className="d-flex align-items-center bg-primary text-white py-3 px-3 profile-box-motif"
          >
            <img 
              src={userAvatar} 
              alt="Avatar Pengguna"
              width="40"
              height="40"
              className="rounded-circle me-2" 
            />
            <span className="fw-bold">Jessica Wulandari</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;

