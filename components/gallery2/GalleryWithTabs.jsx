"use client"
import React, {useState, useEffect, useRef, useCallback} from 'react'
import {paint_categories, filterPaintingsByCategory} from "./paint_data"
import PaintTabs from './PaintTabs/PaintTabs';
import PaintGrid from "./PaintGrid/PaintGrid"
import { Container} from 'react-bootstrap';

function GalleryWithTabs() {
  const [activeTab, setActiveTab] = useState('3d');
  const [grid, setGrid] = useState(null);
   const isotopContainer = useRef(null);
    const [isotopeInitialized, setIsotopeInitialized] = useState(false);
    const [isotopeInstance, setIsotopeInstance] = useState(null);

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(()=>{
    const data = filterPaintingsByCategory(activeTab)
    setGrid(data);
  },[activeTab])

  const handleImageClick = (image) =>{
    // setCurrentImageSelection(image)
  }

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
  
    useEffect(() => {
      if ( !isotopeInitialized) {
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
    }, [isotopeInitialized, isotopeInstance, initIsotop]);
  return (
    <div style={{marginTop: "0", minHeight: "100vh"}}>
    <Container fluid>
    <PaintTabs paint_categories={paint_categories} openTab={openTab} activeTab={activeTab}/>
    <PaintGrid images={grid} handleImageClick={handleImageClick} selectionType="singleSelection"/>
    </Container>
    </div>
  )
}

export default GalleryWithTabs