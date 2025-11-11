import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/TalentPage.css';
import Pagination from '../components/common/Pagination';
import { useTalents } from '../hooks/useTalents';

function TalentPage() {
    const { 
        paginatedTalents, 
        currentPage, 
        totalPages, 
        goToPage,
        totalTalents,
        itemsPerPage
    } = useTalents();

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
                <div className="card bg-light border-0 rounded-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0 text-primary">
                                <thead className="table-primary text-primary">
                                    <tr>
                                        <th scope="col">Talent Name</th>
                                        <th scope="col">Skills</th>
                                        <th scope="col">Prefered Position</th>
                                        <th scope="col">Upload at</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedTalents.map((talent) => (
                                        <tr key={talent.id}>
                                            <td>{talent.name}</td>
                                            <td>{talent.skills}</td>
                                            <td>{talent.position}</td>
                                            <td>{talent.uploadedAt}</td>
                                            <td>
                                                <a className="primary text-decoration-none">View Detail
                                                    <svg className="ms-2 mb-1" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.66669 4.66667H11.3334M11.3334 4.66667V11.3333M11.3334 4.66667L4.66669 11.3333" stroke="#0043CE" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={goToPage}
                                totalTalents={totalTalents}
                                itemsPerPage={itemsPerPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentPage;