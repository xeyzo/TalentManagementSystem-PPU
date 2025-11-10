import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Pagination.css';

function Pagination() {
    return (
        <div className="d-flex justify-content-between align-items-center mt-3">

            <span className="text-muted">1 - 10 / 15 records</span>

            <nav aria-label="Page navigation">
                <ul className="pagination mb-0">
                    
                    {/* PERBAIKAN: Tambah 'disabled' dan ganti 'aria-label' */}
                    <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </a>
                    </li>

                    {/* PERBAIKAN: Tambah 'active' di halaman 1 */}
                    <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;