import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Paginacion(props) {
    // Get min and max from props with defaults
    const min = props.min || 1;
    const max = props.max || 10;
    
    const [currentPage, setCurrentPage] = useState(min + 2); // Start at page 3 by default
    
    const handleDecrease = () => {
        setCurrentPage(prev => Math.max(prev - 1, min));
    };
    
    const handleIncrease = () => {
        setCurrentPage(prev => Math.min(prev + 1, max));
    };
    
    const renderPageItems = () => {
        const items = [];
        // Calculate start position to show 5 pages centered around current when possible
        let start = Math.max(min, currentPage - 2);
        // Adjust start if we're too close to max
        if (start + 4 > max) {
            start = Math.max(min, max - 4);
        }
        
        // Create 5 page items or fewer if max-min < 5
        for (let i = 0; i < 5 && start + i <= max; i++) {
            const pageNum = start + i;
            items.push(
                <li key={pageNum} className={`page-item ${pageNum === currentPage ? 'active' : ''}`}>
                    <a 
                        className="page-link" 
                        href={`/p${pageNum}`}
                        onClick={(e) => {
                            e.preventDefault(); // Prevent actual navigation
                            setCurrentPage(pageNum);
                        }}
                    >
                        {pageNum}
                    </a>
                </li>
            );
        }
        return items;
    };
    
    return (
        <div className="mt-4">
            <h2>Componente de Paginación</h2>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage <= min ? 'disabled' : ''}`}>
                            <a 
                                className="page-link" 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleDecrease();
                                }}
                                aria-disabled={currentPage <= min}
                            >
                                &lt;&lt;
                            </a>
                        </li>
                        {renderPageItems()}
                        <li className={`page-item ${currentPage >= max ? 'disabled' : ''}`}>
                            <a 
                                className="page-link" 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleIncrease();
                                }}
                                aria-disabled={currentPage >= max}
                            >
                                &gt;&gt;
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Paginacion;
