"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import NoImagesFound from '../NoImagesFound';
import Image from "next/image";
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { 
  fetchGalleryImages, 
  selectGalleryImages, 
  selectGalleryLoading, 
  selectGalleryError 
} from '../../../../redux/slices/uiSlice';
import { Container, Spinner } from 'react-bootstrap';
import ImageModal from '../ImageModal';
import GalleryTitle from "./GalleryTitle/GalleryTitle"
import GalleryImages from "./GalleryImages/GalleryImages"
import GalleryPagination from "./GalleryPagination/GalleryPagination"

const ITEMS_PER_PAGE = 9;

export default function DashboardGallery() {
  const dispatch = useDispatch();
  const router = useRouter();
  const images = useSelector(selectGalleryImages);
  const loading = useSelector(selectGalleryLoading);
  const error = useSelector(selectGalleryError);
  
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

  // Fetch images on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        await dispatch(fetchGalleryImages()).unwrap();
      } catch (error) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
          router.replace('/login');
        }
      }
    };

    fetchImages();
  }, [dispatch, router]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ height: "90vh" }}>
        <div className="text-center">
          <Spinner
            animation="border"
            variant="primary"
            style={{ 
              width: '4rem', 
              height: '4rem',
              borderWidth: '0.25em'
            }}
            role="status"
          />
          <p className="mt-4 text-lg font-medium text-gray-600">Loading Gallery</p>
        </div>
      </div>
    );
  }

  if (!loading && (!images || images.length === 0)) {
    return <NoImagesFound />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="error-message">Error: {error}</div>
      </div>
    );
  }

  return (
    <Container fluid>
      <div>
        <div className="row">
          <GalleryTitle title={'Your AI'} titleHighlight={'Creation'} isTitle={true}/>
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