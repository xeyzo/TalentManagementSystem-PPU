import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange, totalTalents, itemsPerPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const startRecord = (currentPage - 1) * itemsPerPage + 1;
    const endRecord = Math.min(currentPage * itemsPerPage, totalTalents);

    return (
        <div className="d-flex justify-content-between align-items-center mt-3">

            <span className="text-muted">{startRecord} - {endRecord} / {totalTalents} records</span>

            <nav aria-label="Page navigation">
                <ul className="pagination mb-0">
                    
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </a>
                    </li>

                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <a className="page-link" href="#" onClick={() => onPageChange(number)}>
                                {number}
                            </a>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Next" onClick={() => onPageChange(currentPage + 1)}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;