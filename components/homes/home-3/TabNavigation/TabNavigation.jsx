"use client"
import React, { useCallback, useEffect, useState } from 'react';
import styles from './TabNavigation.module.css';
import { Container } from 'react-bootstrap';
import {filterHomepageGalleryDataByCategory, homepage_tabs} from "../../../../data/PublicGallery/galleryData"

import PaintGrid from "../../../dashboard/PaintSection/PaintGrid/PaintGrid"
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(() => 'Charcoal');
  const [grid, setGrid] = useState(null);

  useEffect(()=>{
      const data = filterHomepageGalleryDataByCategory(activeTab)
      setGrid(data);
    },[])
    useEffect(()=>{
      const data = filterHomepageGalleryDataByCategory(activeTab)
      setGrid(data);
    },[activeTab])
  const handleImageClick = useCallback((image) =>{
    // alert("Image: "+JSON.stringify(image))
  },[])
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);
  return (
    <Container style={{marginTop: "5rem"}}>
            <div className="content" >
              <div className="heading-section wow fadeInUp" style={{textAlign: "center"}}>
                {/* <h6>{heading}</h6> */}
                <div className="main-title">Timeless Memories in Paint</div>
              </div>
              <p style={{ textAlign: "justify" }}>
              Transform your cherished photographs into stunning custom paintings that capture the heart of every moment. Our skilled artists blend traditional techniques with contemporary style to create unique pieces that honor your memories through vibrant colors and masterful brushwork.
                </p>
            </div>

      <div className={styles.nav}>
        {homepage_tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className={styles.content}>
        <PaintGrid images={grid} handleImageClick={handleImageClick} selectionType="bulkSelection"/>
      </div>
    </Container>
  );
};

export default React.memo(TabNavigation);