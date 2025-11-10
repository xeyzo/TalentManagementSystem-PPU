import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/TalentPage.css';
import Pagination from '../components/common/Pagination';

function TalentPage() {
    return (
        <div className="row py-4 px-5 align-items-center">

            <div className="col-8">
                <h4 className="fw-bold">
                    Talent list
                </h4>
            </div>

            <div className="col-4">
                <div className="d-flex align-items-center justify-content-end">
                    <input
                        type="search"
                        className="form-control talent-search-input"
                        placeholder="Search talent..."
                        aria-label="Search talent"
                    />

                    <button
                        type="button"
                        className="btn bg-primary text-white ms-2 talent-add-btn flex-shrink-0 text-nowrap fs-6"
                    >
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        Add New CV
                    </button>
                </div>
            </div>

            <div className='col-12 mt-4'>
                <div className="card" style={{ border: "none" }}>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0 text-primary">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Talent Name</th>
                                        <th scope="col">Skills</th>
                                        <th scope="col">Prefered Position</th>
                                        <th scope="col">Upload at</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Andi Wijaya</td>
                                        <td>Senior Frontend Developer</td>
                                        <td>andi.wijaya@example.com</td>
                                        <td><span className="badge bg-success">Aktif</span></td>
                                    </tr>
                                    <tr>
                                        <td>Budi Santoso</td>
                                        <td>Backend Developer</td>
                                        <td>budi.santoso@example.com</td>
                                        <td><span className="badge bg-success">Aktif</span></td>
                                    </tr>
                                    <tr>
                                        <td>Citra Lestari</td>
                                        <td>UI/UX Designer</td>
                                        <td>citra.lestari@example.com</td>
                                        <td><span className="badge bg-warning text-dark">Cuti</span></td>
                                    </tr>
                                    <tr>
                                        <td>Doni Firmansyah</td>
                                        <td>Project Manager</td>
                                        <td>doni.firmansyah@example.com</td>
                                        <td><span className="badge bg-danger">Non-Aktif</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentPage;