// import React, { useEffect, useState } from "react";
// import { Row, Col, Card, Pagination } from "react-bootstrap";
// import styles from "./PaintGrid.module.css";

// const IMAGES_PER_PAGE = 10;

// const Tab2Grid = ({ images, handleImageClick, selectionType }) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1);
  
//     const totalPages = images ? Math.ceil(images.length / IMAGES_PER_PAGE) : 0;
//     const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
//     const endIndex = startIndex + IMAGES_PER_PAGE;
//     const currentImages = images ? images.slice(startIndex, endIndex) : [];

//   useEffect(() => {
//     setSelectedIndex(0);
//     setCurrentPage(1);
//     if (images && images.length > 0) {
//       handleImageClick(images[0]);
//     }
//   }, [images]);

//   const handleImageGrid = (image, index) => {
//     handleImageClick(image);
//     setSelectedIndex(startIndex + index);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     setSelectedIndex((pageNumber - 1) * IMAGES_PER_PAGE);
//     if (images.length > 0) {
//       const newStartIndex = (pageNumber - 1) * IMAGES_PER_PAGE;
//       handleImageClick(images[newStartIndex]);
//     }
//   };

//   const getVisiblePages = () => {
//     const maxVisiblePages = 5;
//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = startPage + maxVisiblePages - 1;

//     if (endPage > totalPages) {
//       endPage = totalPages;
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
//   };

//   return (
//     <>
//       <Row style={{ marginTop: "3rem", padding: "0px" }} className={`${selectionType === "bulkSelection" ? styles.selectedBulk : ""}`}>
//         {!images ? (
//           <h1>No Image</h1>
//         ) : (
//           currentImages.map((image, index) => (
//             <Col key={index} xs={12} sm={6} md={4} lg={2} className={`mb-4`}>
//               <Card
//                 onClick={() => handleImageGrid(image, index)}
//                 className={`${styles.imageCard} `}
//               >
//                 <Card.Img
//                   style={{ height: "auto" }}
//                   src={image.src}
//                   alt={`Image ${startIndex + index + 1}`}
//                   className={styles.cardImg}
//                 />
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
      
//       {totalPages > 1 && (
//         <Row className="justify-content-center mt-4 mb-4">
//           <Col xs="auto">
//             <Pagination className="pagination-custom">
//               <Pagination.Item
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </Pagination.Item>
              
//               {getVisiblePages().map(pageNum => (
//                 <Pagination.Item
//                   key={pageNum}
//                   active={currentPage === pageNum}
//                   onClick={() => handlePageChange(pageNum)}
//                 >
//                   {pageNum}
//                 </Pagination.Item>
//               ))}

//               <Pagination.Item
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </Pagination.Item>
//             </Pagination>
//           </Col>
//         </Row>
//       )}

//       <style jsx global>{`
//         .pagination-custom {
//           gap: 8px;
//           align-items: center;
//         }

//         .pagination-custom .page-item .page-link {
//           border-radius: 4px;
//           border: 1px solid #E6E8EC;
//           min-width: 32px;
//           height: 32px;
//           padding: 4px 8px;
//           color: #777E90;
//           background-color: transparent;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 500;
//           font-size: 14px;
//           transition: all 0.2s ease;
//         }

//         .pagination-custom .page-item .page-link:hover:not([disabled]) {
//           background-color: #F4F5F6;
//           color: #23262F;
//           border-color: #E6E8EC;
//         }

//         .pagination-custom .page-item.active .page-link {
//           background-color: #664DFF;
//           color: white;
//           border-color: #664DFF;
//         }

//         .pagination-custom .page-item.disabled .page-link {
//           background-color: transparent;
//           color: #B1B5C3;
//           border-color: #E6E8EC;
//           opacity: 0.5;
//         }

//         .pagination-custom .page-link:focus {
//           box-shadow: none;
//           outline: none;
//           border-color: #664DFF;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Tab2Grid;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Row, Col, Card, Pagination } from "react-bootstrap";
import styles from "./PaintGrid.module.css";

const IMAGES_PER_PAGE = 10;

const Tab2Grid = ({ images, handleImageClick, selectionType }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = images ? Math.ceil(images.length / IMAGES_PER_PAGE) : 0;
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    const currentImages = images ? images.slice(startIndex, endIndex) : [];

    const handleImageGrid = (image, index) => {
        handleImageClick(image);
        setSelectedIndex(startIndex + index);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSelectedIndex((pageNumber - 1) * IMAGES_PER_PAGE);
        if (images?.length > 0) {
            const newStartIndex = (pageNumber - 1) * IMAGES_PER_PAGE;
            handleImageClick(images[newStartIndex]);
        }
    };

    const getVisiblePages = () => {
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - 2);
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    useEffect(() => {
        setSelectedIndex(0);
        setCurrentPage(1);
        if (images?.length > 0) {
            handleImageClick(images[0]);
        }
    }, [images, handleImageClick]);

    return (
        <>
            <Row style={{ marginTop: "3rem", padding: "0px" }} className={`${selectionType === "bulkSelection" ? styles.selectedBulk : ""}`}>
                {!images ? (
                    <h1>No Image</h1>
                ) : (
                    currentImages.map((image, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
                            <Card
                                onClick={() => handleImageGrid(image, index)}
                                className={styles.imageCard}
                            >
                                <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                                    <Image
                                        src={image.src}
                                        alt={`Image ${startIndex + index + 1}`}
                                        width={500}
                                        height={300}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        priority={index < 4}
                                        className={styles.cardImg}
                                        quality={75}
                                    />
                                </div>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
            
            {totalPages > 1 && (
                <Row className="justify-content-center mt-4 mb-4">
                    <Col xs="auto">
                        <Pagination className="pagination-custom">
                            <Pagination.Item
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Pagination.Item>
                            
                            {getVisiblePages().map(pageNum => (
                                <Pagination.Item
                                    key={pageNum}
                                    active={currentPage === pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                >
                                    {pageNum}
                                </Pagination.Item>
                            ))}

                            <Pagination.Item
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Pagination.Item>
                        </Pagination>
                    </Col>
                </Row>
            )}

            <style jsx global>{`
                .pagination-custom {
                    gap: 8px;
                    align-items: center;
                }

                .pagination-custom .page-item .page-link {
                    border-radius: 4px;
                    border: 1px solid #E6E8EC;
                    min-width: 32px;
                    height: 32px;
                    padding: 4px 8px;
                    color: #777E90;
                    background-color: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 500;
                    font-size: 14px;
                    transition: all 0.2s ease;
                }

                .pagination-custom .page-item .page-link:hover:not([disabled]) {
                    background-color: #F4F5F6;
                    color: #23262F;
                    border-color: #E6E8EC;
                }

                .pagination-custom .page-item.active .page-link {
                    background-color: #664DFF;
                    color: white;
                    border-color: #664DFF;
                }

                .pagination-custom .page-item.disabled .page-link {
                    background-color: transparent;
                    color: #B1B5C3;
                    border-color: #E6E8EC;
                    opacity: 0.5;
                }

                .pagination-custom .page-link:focus {
                    box-shadow: none;
                    outline: none;
                    border-color: #664DFF;
                }
            `}</style>
        </>
    );
};

export default Tab2Grid;