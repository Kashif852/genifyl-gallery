import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
const GalleryPagination = ({ currentPage, pageCount, onPageChange }) => {
  const adjustedCurrentPage = currentPage + 1; // Convert 0-based to 1-based for display

  const getVisiblePages = () => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, adjustedCurrentPage - 2);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > pageCount) {
      endPage = pageCount;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const handlePageChange = (newPage) => {
    onPageChange({ selected: newPage - 1 }); // Convert 1-based back to 0-based and match ReactPaginate event shape
  };

  return (
    pageCount > 1 && (
      <Container>
        <Row>
        <Col className='md-12' >
        <div className="flex justify-center mt-4 mb-4" >
        <div className="flex">
          <ul className="pagination-custom flex gap-2 items-center">
            {/* Previous Button */}
            <li className="page-item">
              <button
                onClick={() => handlePageChange(adjustedCurrentPage - 1)}
                disabled={adjustedCurrentPage === 1}
                className={`page-link ${adjustedCurrentPage === 1 ? 'disabled' : ''}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </li>
            
            {/* Page Numbers */}
            {getVisiblePages().map(pageNum => (
              <li key={pageNum} className={`page-item ${adjustedCurrentPage === pageNum ? 'active' : ''}`}>
                <button
                  onClick={() => handlePageChange(pageNum)}
                  className="page-link"
                >
                  {pageNum}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li className="page-item">
              <button
                onClick={() => handlePageChange(adjustedCurrentPage + 1)}
                disabled={adjustedCurrentPage === pageCount}
                className={`page-link ${adjustedCurrentPage === pageCount ? 'disabled' : ''}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <style jsx>{`
          .pagination-custom {
            gap: 8px;
            align-items: center;
          }

          .page-item .page-link {
            border-radius: 4px;
            border: 1px solid #1a237e;
            min-width: 32px;
            height: 32px;
            padding: 4px 8px;
            color: #1a237e;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 14px;
            transition: all 0.2s ease;
          }

          .page-item .page-link:hover:not([disabled]) {
            background-color: #F4F5F6;
            color: #23262F;
            border-color: #E6E8EC;
          }

          .page-item.active .page-link {
            background-color: #1a237e;
            color: white;
            border-color: #1a237e;
          }

          .page-item .page-link[disabled] {
            background-color: transparent;
            color: #1a237e;
            border-color: #1a237e;
            opacity: 0.5;
            cursor: not-allowed;
          }

          .page-item .page-link:focus {
            box-shadow: none;
            outline: none;
            border-color: #664DFF;
          }
        `}</style>
      </div> 
        </Col>
      </Row>
      </Container>
    ) 
  );
};

export default GalleryPagination;