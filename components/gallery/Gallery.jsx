// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import ReactPaginate from 'react-paginate';
// import {Container} from "react-bootstrap"
// const ITEMS_PER_PAGE = 9;

// export default function Gallery({ photoItemsMain = [] }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const isotopContainer = useRef();
//   const isotope = useRef();

//   const pageCount = Math.ceil(photoItemsMain.data.length / ITEMS_PER_PAGE);
//   const currentItems = photoItemsMain.data.slice(
//     currentPage * ITEMS_PER_PAGE,
//     (currentPage + 1) * ITEMS_PER_PAGE
//   );

//   const initIsotop = async () => {
//     const Isotope = (await import("isotope-layout")).default;
//     const imagesloaded = (await import("imagesloaded")).default;

//     isotope.current = new Isotope(isotopContainer.current, {
//       itemSelector: ".element-item",
//       layoutMode: "masonry",
//     });

//     imagesloaded(isotopContainer.current).on("progress", () => {
//       isotope.current.layout();
//     });
//   };

//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     initIsotop();
//   }, []);

//   return (
//       <Container fluid>
//         <div className="row" >
//           <div className="col-12">
//             <div className="heading-section wow fadeInUp style-2 text-center">
//               {/* <h6>{photoItemsMain.title}</h6> */}
//               <div className="main-title">
//                 {photoItemsMain.title}{" "}
//                 <span className="animation-text tf-color-blue">{photoItemsMain.titleSpan}</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-12" >
//             <div className="widget-filter-isotope">
//               <div  className="grid" style={{width: "auto"}}>
//                 {currentItems?.map((elm, i) => (
//                   <div
//                     key={i}
//                     className={`element-item wow fadeInUp ${elm.category}`}
//                   >
//                     <div className="box-image" >
//                       <Image
//                       style={{borderRadius: "10px"}}
//                         src={elm.image}
//                         width={410}
//                         height={380}
//                         alt="image"
//                       />
//                       <h4>
//                         <a href="#">{elm.title}</a>
//                       </h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%"}}>
//           <nav className="pagination__wrap mt-30">
//             {
//               currentItems.length > 3 && <ul className="list-wrap">
//               <ReactPaginate
//                 breakLabel="..."
//                 nextLabel="→"
//                 previousLabel="←"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={3}
//                 pageCount={pageCount}
//                 renderOnZeroPageCount={null}
//                 className="list-wrap"
//                 pageClassName="page-item"
//                 pageLinkClassName="page-link"
//                 previousClassName="page-item"
//                 previousLinkClassName="page-link"
//                 nextClassName="page-item"
//                 nextLinkClassName="page-link"
//                 activeClassName="active"
//               />
//             </ul>
//             }
            
//           </nav>
//           </div>
//         </div>
   
//       </Container>
//   );
// }


"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import NoImagesFound from './NoImagesFound';
import { useRouter } from 'next/navigation';
import { Container, Spinner } from 'react-bootstrap';
import ImageModal from './ImageModal';
import GalleryTitle from "./GalleryTitle/GalleryTitle"
import GalleryImages from "./GalleryImages/GalleryImages"
import GalleryPagination from "./GalleryPagination/GalleryPagination"
import {images} from "./images"
const ITEMS_PER_PAGE = 9;

export default function DashboardGallery() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isotopeInitialized, setIsotopeInitialized] = useState(false);
  const isotopContainer = useRef(null);
  const [isotopeInstance, setIsotopeInstance] = useState(null);
  const [show, setShow] = useState(false);

  // Memoize pageCount and currentItems
  const pageCount = useMemo(() => 
    Math.ceil((images?.length || 0) / ITEMS_PER_PAGE),
    [images?.length]
  );

  const currentItems = useMemo(() => 
    images?.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    ),
    [images, currentPage]
  );

  const initIsotop = useCallback(async () => {
    if (typeof window === 'undefined' || !isotopContainer.current || isotopeInitialized) return;

    try {
      const [{ default: Isotope }, { default: imagesloaded }] = await Promise.all([
        import("isotope-layout"),
        import("imagesloaded")
      ]);

      const imgLoad = imagesloaded(isotopContainer.current);
      
      imgLoad.on('done', () => {
        const iso = new Isotope(isotopContainer.current, {
          itemSelector: ".element-item",
          layoutMode: "masonry",
          transitionDuration: '0.4s'
        });
        setIsotopeInstance(iso);
        setIsotopeInitialized(true);
      });

      imgLoad.on('fail', (error) => {
        console.error('Image load failed:', error);
      });

    } catch (error) {
      console.error('Error initializing Isotope:', error);
    }
  }, [isotopeInitialized]);

  const onPageChange = useCallback((event) => {
    setCurrentPage(event.selected);
    setIsotopeInitialized(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openModal = useCallback((item) => {
    setSelectedImage(item);
    setShow(true);
  }, []);

  const closeModal = useCallback(() => {
    setShow(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  const handleDownload = useCallback(async (imageUrl, prompt) => {
    const downloadButton = document.getElementById('download-button');
    
    if (downloadButton) {
      downloadButton.disabled = true;
      downloadButton.innerHTML = '<span class="loader"></span> Downloading...';
    }

    try {
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = `${prompt?.slice(0, 30) || 'image'}-${Date.now()}.png`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      const successMessage = document.createElement('div');
      successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      successMessage.textContent = 'Image opened for download';
      document.body.appendChild(successMessage);
      setTimeout(() => successMessage.remove(), 3000);

    } catch (error) {
      console.error('Download error:', error);
      
      const errorMessage = document.createElement('div');
      errorMessage.className = 'fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      errorMessage.textContent = 'Failed to download image. Please try again.';
      document.body.appendChild(errorMessage);
      setTimeout(() => errorMessage.remove(), 3000);
    } finally {
      if (downloadButton) {
        downloadButton.disabled = false;
        downloadButton.innerHTML = 'Download';
      }
    }
  }, []);

  // Initialize Isotope when items change
  useEffect(() => {
    if (currentItems?.length > 0 && !isotopeInitialized) {
      if (isotopeInstance) {
        isotopeInstance.destroy();
      }
      initIsotop();
    }

    return () => {
      if (isotopeInstance) {
        isotopeInstance.destroy();
        setIsotopeInstance(null);
      }
    };
  }, [currentItems, isotopeInitialized, isotopeInstance, initIsotop]);

  if (!images || images.length === 0) {
    return <>
    <h2 style={{color: "white"}}>Images {JSON.stringify(images)}</h2>
    <NoImagesFound />;
    </>
  }


  return (
    <Container fluid>
      <div>
        <div className="row">
          <GalleryTitle title={'Handcrafted'} titleHighlight={'Masterpieces'} isTitle={true} />
          <GalleryImages isotopContainer={isotopContainer} galleryImages={currentItems} openModal={openModal}/>
          <GalleryPagination currentPage={currentPage} pageCount={pageCount} onPageChange={onPageChange}/>
        </div>
      </div>

      <ImageModal
        show={show}
        onHide={closeModal}
        selectedImage={selectedImage}
        onDownload={handleDownload}
      />
    </Container>
  );
}